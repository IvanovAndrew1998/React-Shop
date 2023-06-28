import axios from "axios"
import sizeStore from './Store/ProductPageStore';


const YANDEX_API_KEY = 'c5c2b2fc-35f1-4beb-970d-41b78b512f00';

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

export async function getLoginTokens(username, password) {
    const tokens = await axios.post("http://uv-mir.ru/api/token/", {
        username: username,
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

export async function getBasket(access_token) {
    const basketInfo = await axios.get('http://uv-mir.ru/profile/basket/', {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        }
    })
    return basketInfo;
}

// export async function addToBasket(access_token) {
//     await axios.post('http://uv-mir.ru/profile/basket/' {

//     })
// }

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

export async function patchProfileInfo(first_name, last_name, date_of_birth, email, gender, access_token) {
    await axios.patch('http://uv-mir.ru/profile/', {
        FirstName: first_name,
        LastName: last_name,
        DateOfBirth: date_of_birth,
        Email: email,
        Gender: gender
    }, {
        headers: {
            'Authorization': ` Bearer ${access_token}`

        }
    })
}

// Добавить в корзину

export async function addToBasket(access_token, sizeStore, id) {
    await axios.post("http://uv-mir.ru/profile/basket/", {
        headers: {
            'Authorization': ` Bearer ${access_token}`
        },
        body: JSON.stringify([
            sizeStore.sizes.map(size => {
                if (size.count != 0) {
                    return {
                        'id': id,
                        "size": {
                            
                        }
                    }
                } 
            })
        ])
        
    })
}

//


// GEo

export async function getAddressByLocation(latitude, longitude) {
    return await axios.get(`https://geocode-maps.yandex.ru/1.x/?format=json&kind=locality&apikey=${YANDEX_API_KEY}&geocode=${longitude},${latitude}`)

}

export async function getLocationByAddress(settlement, street, builiding) {
    return await axios.get(`https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&kind=house&geocode=${settlement}+${street}+${builiding}&format=json`)
}
