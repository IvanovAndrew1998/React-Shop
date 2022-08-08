import Header from "./Components/Header/Header";
import Article from "./Components/Pages/ProductPage/Article/Article";
import ArticleTwoProductCards from "./Components/Pages/ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./Components/Pages/ProductPage/ArticleTwo/AtricleTwo";
import SectionOne from "./Components/Pages/ProductPage/SectionOne/SectionOne";
import SectionTwo from "./Components/Pages/ProductPage/SectionTwo/SectionTwo";


function App() {
    return (
        <div className="App">
            <Header />
            <Article/>
            <SectionOne/>
            <AtricleTwo/>
            <ArticleTwoProductCards/>
            <SectionTwo/>

        </div >
    );
}

export default App;
