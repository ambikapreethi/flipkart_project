import React ,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {removeFromCart, updateTotalPrice} from "../reducers/cartSlice";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Header } from "./Header";
import "../styles/table.css";
const CartPage=({ items, removeFromCart })=>
    {
        const cartItems = useSelector((state) => state.cart.items);
        const totalPrice = useSelector((state) => state.cart.totalPrice);
        const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);
        const [viewType, setViewType] = useState("grid"); 
        // console.log(cartItems);
        const dispatch=useDispatch();
        const currentDate=new Date();
        
        return (
                 
                <div className="main">
                     <Header/>
                    <h1>Shopping Cart</h1>
            
                    <div className="cart-view-buttons">
                        <button className="gridbtn" onClick={() => setViewType("grid")}>Grid View</button>
                        <button className="tablebtn" onClick={() => setViewType("table")}>Table View</button>
                        <Link to="/"><button className="prod">Go to Products page</button></Link>
                
                    </div>
                    {!cartIsEmpty && (
                            <div>
                            <h2  className="totprice">Total Price: ${totalPrice}</h2>
                            </div>
                     )}
                     
            {viewType === "grid" ? (
                <div className="cart-items-grid">
                    
                        {cartItems.map((item) => (
                            <div className="grid_div">
                                <p className="grid_title">{item.title}</p>
                            <p className="grid_image"><img src={item.image} alt={item.title} style={{ width: '80px', height: '80px' }}/></p>
                            <p className="grid_price">Price: ${item.price}</p>
                            <Link to="/billing"><p><button className="grid_buy">Buy Now</button></p></Link>
                            <p> <button className ="grid_removebtn" onClick={() => removeFromCart(item.id)}>Remove</button></p>
                   </div>
                         
                    ))}
                
            </div>)
             :(
             <div className="cart-items-table">
                    <table>
                        <thead>
                            <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map((item) => (
                            <tr>
                            <td><img src={item.image} alt={item.title} style={{ width: '50px', height: '60px' }}/></td>
                            <td className="title">{item.title}</td>
                            <td className="price">$ {item.price}</td>
                            <td><Link to="/billing"><button className="buy">Buy Now</button></Link></td>
                            <td> <div> <button className ="removebtn" onClick={() => removeFromCart(item.id)}>Remove</button></div>
                   </td>
                         </tr>
                         
                    ))}
                </tbody>
             </table>
            </div>
              )}
                
    </div>              
            )
    }


const mapStateToProps = state => ({
    items: state.cart.items,
  });
  
  export default connect(mapStateToProps, { removeFromCart })(CartPage);