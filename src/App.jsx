import Header from "./Components/Header/Header";
import Article from "./Components/Pages/ProductPage/Article/Article";
import ArticleTwoProductCards from "./Components/Pages/ProductPage/ArticleTwo/ArticleTwoProductCards";
import AtricleTwo from "./Components/Pages/ProductPage/ArticleTwo/AtricleTwo";
import SectionOne from "./Components/Pages/ProductPage/SectionOne/SectionOne";
import SectionTwo from "./Components/Pages/ProductPage/SectionTwo/SectionTwo";
import Footer from "./Components/Footer/Footer";
import ArticleThree from "./Components/Pages/ProductPage/ArticleThree/ArticleThree";

function App() {
    return (
        <div className="App">
            <Header />
            <Article/>
            <SectionOne/>
            <ArticleThree/>
            <AtricleTwo/>
            <ArticleTwoProductCards/>
            <SectionTwo/>
            
            <Footer/>
            

        </div >
    );
}

export default App;
