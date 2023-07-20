import "./ArticleComponent.css"
import logo from "./monotype-fonts.jpg"

const ArticleComponent = () => {
  return (
    <div className='mono-article'>
        <header>
            <h1>Monotype Fonts</h1>
            <p>by MonotypeFonts.com</p>
        </header>
        <p>
            <img src={logo} alt="logo" />
            Monotype Fonts is the only on-demand font service designed by creatives, for creatives — making it easier than ever to find, manage and share the world’s best typography. With the largest collection of award-winning type as well as access to the world’s most sought after foundries and type designers, Monotype Fonts enables creative professionals to spend less time on administrative work, and more time on designing meaningful brand experiences. 
            <a href="" className="our-link"> Continue Reading...</a>
        </p>
    </div>
  )
}

export default ArticleComponent
