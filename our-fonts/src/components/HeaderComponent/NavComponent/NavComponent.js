import React from 'react';
import './NavComponent.css';

const NavComponent = () => {
  return (
    <header class="header">
        <a href="" class="header-logo">
        fonts<span style={{color: "red"}}>.</span><span style={{fontWeight: "400"}}>com</span>
        </a>

        <div className="header-searchbox">
            <a href="" style={{color:"#777777", padding:"7px 0 0 20px", width:"73.612px"}}>All</a>
            <input style={{border:"none", flexGrow: 1}} type="text" placeholder='Search Fonts.com' id="search-field"/>
            <a href="" style={{color:"white", padding:"7px", backgroundColor:"#6CB5D9", borderRadius:" 0 20px 20px 0", width:"42px"}}>O</a>
        </div>

        <div className="header-menu">
            <a href="" class="header-menu-item">
                <div className='hover-color'>Hi there.</div>
                <div className='hover-color'>Sign In</div>
            </a>
            <a href="" class="header-menu-item">
                <div className='hover-color'>Need help?</div>
                <div className='hover-color'>Support</div>
            </a>
            <a href="" class="header-menu-item">
                <div className='cart-menu'>
                    <div className='cart-icon'>
                        <i class="fa-solid fa-cart-shopping hover-color"></i>
                    </div>
                    <div>
                        <div className='hover-color'>Your Cart</div>
                        <div className='hover-color'>Empty</div>
                    </div>
                </div>
            </a>
        </div>
    </header>
  )
}

export default NavComponent