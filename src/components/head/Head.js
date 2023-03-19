import "./head.css";
import {Link} from "react-router-dom";

function Head(){
    return(
        <div className = "head_content">
            <div className = "news">
                <Link to = {'/news'}>
                <h3>Новости</h3>
                </Link>
            </div>
            <div className = "contacts">
                <Link to = {'/contacts'}>
                <h3>Контакты</h3>
                </Link>
            </div>
            <div className = "about">
                <Link to = {'/about'}>
                <h3>О проекте</h3>
                </Link>
            </div>
        </div>
    );
}
export default Head;