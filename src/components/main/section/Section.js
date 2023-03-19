import "./section.css";
import {Link} from "react-router-dom";

function Section(){
    return(
        <div>
        <h1>Меню</h1>
        <div className = "se_content">
            <div className = "news">
                <Link to = {'/news'}>
                    <h3>Главная страница</h3>
                </Link>
            </div>
            <div className = "contacts">
                <Link to = {'/contacts'}>
                    <h3>Теоретическая часть</h3>
                </Link>
            </div>
            <div className = "about">
                <Link to = {'/about'}>
                    <h3>Практическая часть</h3>
                </Link>
            </div>
        </div>
</div>);
}
export default Section;