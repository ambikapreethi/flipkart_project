import React, { useEffect,useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { fetchItems,filterProductsByPrice } from "../reducers/apiSlice";
import "../styles/common.css";
import { Header } from "./Header";
import "../styles/home.css";
import { addToCart,updateTotalPrice } from "../reducers/cartSlice";
import { Link } from "react-router-dom";
import "../styles/cart.css";
import { connect } from "react-redux";
import Rating from '@mui/material/Rating';
import SideBar from "./SideBar";
import { setCurrentPage } from "../reducers/paginationSlice";
 const MenItems =({addToCart,updateTotalPrice,filterProductsByPrice})=>
    {
        const dispatch=useDispatch();
        const products=useSelector(state=>state.products.products);
        const status=useSelector(state=>state.products.status);
        const error=useSelector(state=>state.products.error);
        const category=useSelector(state=>state.products.category);
        const rating=useSelector(state=>state.products.rating);
        const [selectedOption, setSelectedOption] = useState("");
        const currentPage=useSelector(state=>state.pagination.currentPage);
        const itemsPerPage = useSelector(state => state.pagination.itemsPerPage);
        const totalItems=useSelector(state=>state.products.products.length);
 

        const selectedCategory="men's clothing";
        const filteredProducts = selectedCategory
        ? products.filter(item => item.category === selectedCategory)
        : products;

        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
        const handleAddToCart = (product) => {
      
            addToCart(product);
            dispatch(updateTotalPrice());   
           
          };
        useEffect(()=>
        {
            dispatch(fetchItems());
        },[dispatch])

        useEffect(() => {
            
            dispatch(filterProductsByPrice({ minPrice: 0, maxPrice: 1000 })); 
          }, [dispatch]);

        if(status==="loading")
            {
                return <div>Loading...</div>
            }
        if(status==="failed")
            {
                return <div>Error: {error}</div>
            }

            const onPageChange = (pageNumber) => {
                dispatch(setCurrentPage(pageNumber));
              };
        return(
            <>
            <div className="head">
                <div>
                    <SideBar/>
                </div>
                <div>
                
                {filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map(item => (
                  <div key={item.id} style={{ width:"270px",height:"460px",float:"left", margin: "10px", border: "1px solid #ccc", padding: "5px" }}>
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
            </div>
            <div className="pageBtn">
                   <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>Previous</button>
                   <span>{currentPage} of {totalPages}</span>
                   <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
               </div>
               </>
        )
    }
    const mapStateToProps = state => ({
        products: state.products
      });
    
      export  default connect(mapStateToProps, { addToCart,updateTotalPrice,filterProductsByPrice })(MenItems);