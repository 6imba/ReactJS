import './ContentComponent.css'
import Content_1 from './Content_1/Content_1'
import Content_2 from './Content_2/Content_2'
import Content_3 from './Content_3/Content_3'

const ContentComponent = () => {
  return (
    <div className='content-container'>
        <Content_1/>
        <Content_2/>
        <Content_3/>
    </div>
  )
}

export default ContentComponent