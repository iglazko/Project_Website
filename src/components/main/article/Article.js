import "./article.css";
import {Routes, Route} from 'react-router-dom';
import About from "./article_comps/about/about";
import Contacts from "./article_comps/contacts/contacts";
import News from "./article_comps/news/news";

function Article(){
    return(
        <div className = "article-content">
            <Routes>
                <Route path = {'/news'} element = {<News />} />
                <Route path = {'/contacts'} element = {<Contacts />} />
                <Route path = {'/about'} element = {<About />} />
            </Routes>
        </div>
    );
}
export default Article;