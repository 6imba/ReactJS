import './Content_1.css'
import BestSellingFontsComponent from './BestSellignFont/BestSellingFontsComponent'
import ArticleComponent from './Article/ArticleComponent'

const Content_1 = () => {
  return (
    <div className='content-item1'>
      <p className='heading'>BEST SELIING NEW FONTS</p>
      <BestSellingFontsComponent/>
      <p className='heading'>FONT MANAGEMENT & SUBSCRIPTION</p>
      <ArticleComponent/>
      <p className='heading'>IDEAS & INSIGHTS</p>
      <ul>
        <li>
          <a href="" className='our-link'>
            Better Paragraph Spacing
            </a>
          <em>
            By Jason Tselentis
          </em>
        </li>
        <li>
          <a href="" className='our-link'>SST: The Strong, Silent Type</a>
            <em>
              By Allan Haley
            </em>
        </li>
      </ul>
    </div>
  )
}

export default Content_1