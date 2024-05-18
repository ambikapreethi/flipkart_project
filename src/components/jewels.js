import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from "../reducers/apiSlice";
import "../styles/common.css";
import { Header } from "./Header";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { addToCart,updateTotalPrice } from "../reducers/cartSlice";
import "../styles/cart.css";
import { connect } from "react-redux";
 const Jewels =({  addToCart,updateTotalPrice })=>
    {
        const dispatch=useDispatch();
        const products=useSelector(state=>state.api.items);
        const status=useSelector(state=>state.api.status);
        const error=useSelector(state=>state.api.error);
        console.log(useSelector(state=>state.api.items));

        const selectedCategory="jewelery";
        const filteredItems = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : products;

        const handleAddToCart = (product) => {
      
            addToCart(product);
            dispatch(updateTotalPrice());   
           
          };
    
        useEffect(()=>
        {
            dispatch(fetchItems());
        },[dispatch])

        if(status==="loading")
            {
                return <div>Loading...</div>
            }
        if(status==="failed")
            {
                return <div>Error: {error}</div>
            }
        return(
            
            <div className="products">
                 <Header/>
                <ol>
                    {filteredItems.map((item)=>
                    (
                        <div key={item.id} style={{ width:"270px",float:"right", margin: "10px", border: "1px solid #ccc", padding: "5px" }}>
                            <p className="title">{item.title}</p>
                            <img src={item.image} alt="file not found"/>
                            <p><span>Price:</span> ${item.price}</p>
                            <p> <Link to="/cart"><button className="cart" onClick={()=>{handleAddToCart(item)}}>Add to Cart</button></Link><button className="buy">Buy Now</button></p>
                        </div>
                    ))}
                </ol>
            </div>
        )
    }

    const mapStateToProps = state => ({
        api: state.items
      });
    
      export  default connect(mapStateToProps, { addToCart,updateTotalPrice })(Jewels);


