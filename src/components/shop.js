import React, { useEffect,useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems } from "../reducers/apiSlice";
import "../styles/common.css";
import { Header } from "./Header";
import "../styles/home.css";
import { addToCart,updateTotalPrice } from "../reducers/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { connect } from "react-redux";
import { Rating } from "@mui/material";
import { filterByCategory } from "../reducers/apiSlice";
import { filterByRating } from "../reducers/apiSlice";

 const Shop =({addToCart,updateTotalPrice,filterByCategory})=>
    {
        const dispatch=useDispatch();
        const products=useSelector(state=>state.products.products);
        const status=useSelector(state=>state.products.status);
        const error=useSelector(state=>state.products.error);
        const filteredProducts = useSelector(state => state.products.filteredProducts);
        const category=useSelector(state=>state.products.category);
        const rating=useSelector(state=>state.products.rating);
    //  console.log(useSelector(state=>state.products.category));
        const [selectedOption, setSelectedOption] = useState("");

        const handleAddToCart = (product) => {
      
            addToCart(product);
            dispatch(updateTotalPrice());   
           
          };
          
          const handleCategoryChange = (e) => {
            const category = e.target.value;
            dispatch(filterByCategory(category));
            setSelectedOption(e.target.value);
          };
          const handleRatingChange = (e) => {
            const rating = e.target.value;
            dispatch(filterByRating(rating));
            setSelectedOption(e.target.value);
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
            <div>
                 <Header/>
                 <div className="head">
                    <div style={{width:"300px",border:"1px solid #ccc",marginLeft:"20px"}}>
                        <p style={{fontWeight:"bold"}}>Filter Products</p>                   
                        <select value={selectedOption} onChange={handleCategoryChange} className="dropdown">
                        
                            <option value="">Filter by Category</option>
                            <option value="electronics">electronics</option>
                            <option value="men's clothing">men's clothing</option>
                            <option value="jewelery">jewelery</option>
                            <option value="women's clothing">women's clothing</option>
                        </select><br/><br/>
                        <select value={selectedOption} onChange={handleRatingChange} className="dropdown">
                        
                            <option value="">Filter by Rating</option>
                            <option value="1">1 star</option>
                            <option value="2">2 stars</option>
                            <option value="3">3 stars</option>
                            <option value="4">4 stars</option>
                            <option value="5">5 stars</option>
                        </select>
                        <ul>
                            {filteredProducts.map(product => (
                            <div style={{width:"200px"}}>
                                <p><span style={{color:"red"}}>Product Name: </span> {product.title} </p>
                                <p><span style={{color:"red"}}>Category:</span>  {product.category}</p>
                                 <img src={product.image} alt="file not found" style={{width:"100px",height:"100px"}}/>
                                 <p><span style={{color:"red"}}>Rating:</span> {product.rating.rate}</p><hr></hr>
                            </div>
                        ))}
                        </ul>
                
                 </div>
                <div className="items">
                {selectedOption ? (
                    <ol>
                    {filteredProducts.map((item)=>
                    (
                        <div key={item.id} style={{ width:"270px",height:"430px",float:"left", margin: "10px", border: "1px solid #ccc", padding: "5px" }}>
                            <p className="title">{item.title}</p>
                            <img src={item.image} alt="file not found" width="90px" height="90px"/>
                            <p><span>Price:</span> ${item.price}</p>
                            <Rating
                                name="star-rating"
                                value={item.rating.rate}
                                precision={0.5} 
                                size="large"   
                            />
                           <p> <Link to="/cart"><button className="cart" onClick={()=>{handleAddToCart(item)}}>Add to Cart</button></Link>
                           <Link to="/billing"><button className="buy">Buy Now</button></Link></p>
                        </div>
                    ))}
                </ol> ):(
                    <div>
                    {products.map((item)=>
                    (
                        <div key={item.id} style={{ width:"270px",height:"430px",float:"left", margin: "10px", border: "1px solid #ccc", padding: "5px" }}>
                            <p className="title">{item.title}</p>
                            <img src={item.image} alt="file not found" width="90px" height="90px"/>
                            <p><span>Price:</span> ${item.price}</p>
                            <Rating
                                name="star-rating"
                                value={item.rating.rate}
                                precision={0.5} 
                                size="large"   
                            />
                           <p> <Link to="/cart"><button className="cart" onClick={()=>{handleAddToCart(item)}}>Add to Cart</button></Link>
                           <Link to="/billing"><button className="buy">Buy Now</button></Link></p>
                        </div>
                    ))}
                    </div>

                )}
                 
                </div>
                </div>
            </div>
        )
    }
    const mapStateToProps = state => ({
        products: state.products,
        filteredProducts: state.products.filteredProducts
      });
      const mapDispatchToProps = {
        filterByCategory,
        filterByRating
      };
      export  default connect(mapStateToProps, {addToCart,updateTotalPrice,filterByCategory,filterByRating})(Shop);
    