import "./FontView.css"

const FontView = (props) => {
  return (
    <div className="font-view-box">
        <div className="font-view-header">
            <div className="font-view-top">
                <h2 className="font-view-heading">
                    <a href=""> Hernandez Bros Extralight </a>
                </h2>
                <ul className="font-view-device">
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                    <li>
                        <i class="fa-solid fa-desktop"></i>
                    </li>
                </ul>
            </div>
            <div className="add-cart-box">
                <span id="from">From </span>
                <span id="price">$29</span>
                <a href=""className="add-to-cart-btn">Add to Cart</a>
            </div>
        </div>
        <div className="font-view">
            <img src={props.img} alt="" />
        </div>
    </div>
  )
}

export default FontView