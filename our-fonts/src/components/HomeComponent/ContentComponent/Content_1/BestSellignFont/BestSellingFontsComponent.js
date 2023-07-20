import hernandez from "./img/hernandez.jpg";
import tt from "./img/tt.jpg";
import geometrico from "./img/geometrico.jpg";
import fontanella from "./img/fontanella.jpg";
import okta from "./img/okta.jpg";
import fromage from "./img/fromage.jpg";
import "./BestSellingFontsComponent.css";

const BestSellingFontsComponent = () => {
  return (
    <>
        <ul className="bestFontContainer">
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={hernandez} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">Hernandez Bros</a>
            </li>
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={tt} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">TT Livret</a>
            </li>
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={geometrico} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">Geometrico Slab</a>
            </li>
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={fontanella} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">Fontanella</a>
            </li>
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={okta} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">Okta Neue</a>
            </li>
            <li className="bestFontItem">
                <a href="" className="bestFontItem-link">
                    <div className="bestFontItem-logo">
                        <img src={fromage} alt="hernandez" className="bestFontItem-img"/>
                    </div>
                </a>
                <a href="" className="bestFontItem-link our-link">Fromage</a>
            </li>
        </ul>
        <p><a href="" className="our-link">View More...</a></p>
        <br />
    </>
  )
}

export default BestSellingFontsComponent