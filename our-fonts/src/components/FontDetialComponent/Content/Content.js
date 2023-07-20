import "./Content.css"
import FontView from "./FontView/FontView"
import img1 from "./img/font_rend1.png" 
import img2 from "./img/font_rend2.png" 
import img3 from "./img/font_rend3.png" 
import img4 from "./img/font_rend4.png" 
import img5 from "./img/font_rend5.png" 
import img6 from "./img/font_rend6.png" 
import img7 from "./img/font_rend7.png" 
import img8 from "./img/font_rend8.png" 

const Content = () => {
  return (
    <div className='fontdetial-content-container'>
        <div className="content-header">
            <h1>Hernandez Bros</h1>
            <p>By <a href="" className="our-link">Lationtype</a></p>
        </div>
        <div className="content-menu">
            <ul>
                <li className="active">
                    <a href="">Fonts</a>
                </li>
                <li>
                    <a href="">Typeface Story</a>
                </li>
                <li>
                    <a href="">Packages</a>
                </li>
                <li>
                    <a href="">License Information</a>
                </li>
            </ul>
        </div>
        <div className="content-filter">
            <div className="content-filter-desc">INDIVIDUAL STYLES <span>8 styles</span> </div>
            <div className="content-filter-slider">
                32pt  <span> ----------O--- </span>
                <span className="content-filter-searchbox">
                    <input type="text" placeholder="The quick brown fox jumps over the lazy dog." id="ap"/>
                </span>
            </div>
        </div>
        <div className="content-list">
            <FontView img={img1}/>
            <FontView img={img2}/>
            <FontView img={img3}/>
            <FontView img={img4}/>
            <FontView img={img5}/>
            <FontView img={img6}/>
            <FontView img={img7}/>
            <FontView img={img8}/>
        </div>
    </div>
  )
}

export default Content