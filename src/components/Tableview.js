import React from "react";
import { Header } from "./Header";
import {removeFromCart, updateTotalPrice} from "../reducers/cartSlice";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

function Tableview({ items, removeFromCart })
{
    const cartItems = useSelector((state) => state.cart.items);
        const totalPrice = useSelector((state) => state.cart.totalPrice);
        const cartIsEmpty = useSelector((state) => state.cart.items.length === 0);
        // console.log(cartItems);
        const dispatch=useDispatch();
        const currentDate=new Date();
    return(
        <div className="main">
                     <Header/>
                    <h1>Cart</h1>
                    <h2>Table View</h2>
                
                    <div>
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
                            <td>{item.title}</td>
                            <td>$ {item.price}</td>
                            <td> <div> <button className ="removebtn" onClick={() => removeFromCart(item.id)}>Remove</button></div>
                             </td>
                         </tr>))}
                          </tbody>
                          </table>
                                 {!cartIsEmpty && (
                                         <div>
                                         <h2  className="totprice">Total Price: ${totalPrice}</h2>
                                         </div>
                                  )}
                                 </div>
                                 
                                 {/* <Link to="/"><button className="prod">Go to Products page</button></Link> */}
                             </div>              
                        )
    
}
const mapStateToProps = state => ({
    // items: state.cart.items,
    cart: state.items
  });
  
  export default connect(mapStateToProps, { removeFromCart })(Tableview);