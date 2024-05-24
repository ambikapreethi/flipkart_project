import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "../styles/home.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export function Header()
{
    const count=useSelector(state=>state.cart.items.length);
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
                <div>More  </div>
                <div> <FontAwesomeIcon icon={faShoppingCart} />  Cart: <span style={{color:"yellow"}}>{count}</span></div>
                </div>
    
            
        </div>
    )
}