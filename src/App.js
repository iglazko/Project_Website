import "./App.css";
import Head from "./components/head/Head";
import Section from "./components/main/section/Section";
import Article from "./components/main/article/Article";
import Aside from "./components/main/aside/Aside";
import Footer from "./components/footer/Footer";

function App() {
  return (
      <div className = "wrapper">
        <div className = "content">
            <div className = "ghead">
                <Head />
            </div>
            <div className = "gsection">
                <Section />
            </div>
            <div className = "garticle">
                <Article />
            </div>
            <div className = "gaside">
                <Aside />
            </div>
            <div className = "gfooter">
                <Footer />
            </div>
        </div>

    </div>
  );
}

export default App;
