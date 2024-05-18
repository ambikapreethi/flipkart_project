import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faShoppingCart,faAngleDown } from '@fortawesome/free-solid-svg-icons';
import "../styles/home.css";
import { Link } from "react-router-dom";
export function Header()
{
    return(

<div className="container">
            <div className="header">
                <div>Flipkart<br></br>
                <span className="explore">Explore Plus</span>
                <FontAwesomeIcon icon={faPlus}/>
                </div>
                <div>
                    
                </div>
                <div>Become a seller</div>
                <div>More  <FontAwesomeIcon icon={faAngleDown} /></div>
                <div> <FontAwesomeIcon icon={faShoppingCart} />  Cart</div>
                </div>
            <div className="menu">
                <nav>
                    <Link to="/shop">Shop <FontAwesomeIcon icon={faAngleDown} className="angledown"/></Link>
                    <Link to="/TvItems">TVs & Appliances <FontAwesomeIcon icon={faAngleDown} className="angledown"/></Link>
                    <Link to="/menItems">Men <FontAwesomeIcon icon={faAngleDown} className="angledown"/></Link>
                    <Link to="/womenItems">Women <FontAwesomeIcon icon={faAngleDown} className="angledown"/></Link>
                    <Link to="/jewels">Jewels <FontAwesomeIcon icon={faAngleDown} className="angledown"/></Link>
                    
                </nav>
            </div>
            {/* <Shop/> */}
        </div>
    )
}