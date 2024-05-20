import React, { useState } from "react";
import "../styles/BillingForm.css";
import { useSelector,useDispatch } from "react-redux";
import BillingSlice, { updateBillingField,clearBillingForm  } from "../reducers/BillingSlice";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MessageBox from "./MessageBox";
import Shop from "./shop";
import { useNavigate } from "react-router-dom";
function BillingForm()
{
    const[showMessageBox,setshowMessageBox]=useState(false);
    const dispatch=useDispatch();
    const billing=useSelector((state)=>state.billing)
    const count=useSelector(state=>state.cart.items.length);
    const totalPrice=useSelector(state=>state.cart.totalPrice);
    const navigate=useNavigate();
const handleChange=(e)=>
{
 const{name,value} =e.target;
 dispatch(updateBillingField({name,value}));

}
const handleSubmit=(e)=>
    {
        // console.log(billing);
        e.preventDefault();
        setshowMessageBox(true);
    }
    const handleMessageBoxClose = () => {
        navigate("/shop");
        window.location.reload();
       };
    return(
        
        <form onSubmit={handleSubmit}>
        <div className="form_top">
            <h2>Billing Form:</h2>
            <table className="billing_table">
                <tr>
                    <td><label>First Name:</label></td>
                    <td><input type="text" name="firstName"  value={billing.firstName} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Last Name:</label></td>
                    <td><input type="text" name="lastName" value={billing.lastName}  onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>  
                <tr>
                    <td><label>Email:</label></td>
                    <td><input type="email"  name="Email" value={billing.Email} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Address:</label></td>
                    <td><input type="text" name="Address" value={billing.Address} onChange={(e)=>handleChange(e)}  required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>City:</label></td>
                    <td><input type="text"  name="City"  value={billing.City} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>State:</label></td>
                    <td><input type="text" name="State"  value={billing.State} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Zip:</label></td>
                    <td><input type="text" name="Zip" value={billing.Zip} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Payment:(credit/debit/paypal)</label></td>
                    <td><input type="text" name="Payment" value={billing.Payment} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Card No:</label></td>
                    <td><input type="text" name="CardNo" value={billing.CardNo} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Security Code(CVV/CVC):</label></td>
                    <td><input type="text" name="SecCode" value={billing.SecCode} onChange={(e)=>handleChange(e)} required/><span>*</span></td>
                </tr>
                <tr>
                    <td><label>Expiration Date:</label></td>
                    <td><input type="date" name="ExpDate" value={billing.ExpDate} onChange={(e)=>handleChange(e)} required/></td>
                </tr>
                
            </table>
           
        </div>
        <div className="items"> 
            <p>Items Count:   <span>{count}</span></p>
            <p>Total Amount:   <span>{totalPrice}</span></p>
            <p>Shipping:  Free</p>
            <input className="cash" type="radio"/>
                <label className="delivery">  Cash on Delivery</label><br/>
                <button className="submitBtn" type="submit">Submit</button>
                {showMessageBox && (
                <MessageBox onClose={handleMessageBoxClose}>
                    Successfully Ordered!
                </MessageBox>
      )}
            </div>
            
        </form>
      
       
    )
}
const mapStateToProps = state => ({
    billing: state.billing.billing,
  });

  export default connect(mapStateToProps, { updateBillingField })(BillingForm);