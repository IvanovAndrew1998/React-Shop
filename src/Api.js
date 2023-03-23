import axios from "axios"


export function getSizeList( /*  Product ID */
)

// const operator = localhost

{
    return [
        40,
        45,
        50,
        55,
        60,
        70
    ]
}

export async function getProductData(id) {
    const product = await axios.get("http://uv-mir.ru/catalogue/product?id=" + id);
    return product.data;
}


export async function getProductReviews(id) {
    const reviews = await axios.get(`http://uv-mir.ru/reviews/?product_id=` + id);
    return reviews.data;
}

export async function getProfileInfo(access_token) {
    const profileInfo = await axios.get('http://uv-mir.ru/profile/', {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        }
    })
    return profileInfo;
}

export async function getOrdersInfo(access_token) {
    const ordersInfo = await axios.get('http://uv-mir.ru/orders/', {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        }
    })
    return ordersInfo;
}

export async function getHeaderInfo(access_token) {
    const headerInfo = await axios.get('http://uv-mir.ru/header', {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        }
    })

    return headerInfo;
}

export async function getLoginTokens(phone_number, password) {
    const tokens = await axios.post("http://uv-mir.ru/api/token/", {
        phone_number: phone_number,
        password: password
    });
    return tokens;
    // обработать случай неправильного инпута (не правильный логин ИЛИ пароль и  бан по причине многораз) => капча или отказ от сервера
    // обработать случаи для неответа сервера
}
export async function getAccessToken(refresh_token) {
    const tokens = await axios.post("http://uv-mir.ru/api/token/refresh/", {refresh: refresh_token});
    return tokens;
}

export async function dropRefreshToken(refresh_token) {
    await axios.post("http://uv-mir.ru/api/token/blacklist/", {refresh: refresh_token});
}

export async function getCatalogue(tags) {
    const catalogue = await axios.get(`http://uv-mir.ru/catalogue/?tags=${
        tags.join(",")
    }`);
    return catalogue.data;
}

export async function postLike(access_token, id) {

    await axios.post(`http://uv-mir.ru/reviews/feedback/?reviews=${id}`, {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        }
    })
}
// добавить имаги
export async function postReview(access_token, productID, text, rating) {
    console.log(productID, text, rating)
    await axios.post(`http://uv-mir.ru/reviews/`, {
        product: productID,
        text: text,
        rating: rating
    }, {
        headers: {
            'Authorization': ` Bearer ${access_token}`

        }
    })

}
