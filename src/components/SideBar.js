import React from "react";
import "../styles/home.css";
import "../styles/common.css";
import { Link, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { useDispatch ,useSelector } from "react-redux";
import { filterProductsByPrice } from "../reducers/apiSlice";
import { connect } from "react-redux";
import { Slider,Rating } from "@mui/material";


function SideBar({filterProductsByPrice})
{
    const dispatch=useDispatch();
    const [priceRange, setPriceRange] = useState([0, 1000]); 
    const filteredProducts = useSelector(state => state.products.filteredProducts);
    const [sliderChanged, setSliderChanged] = useState(false);
   

    useEffect(() => {
        // Filter products whenever price range changes
        dispatch(filterProductsByPrice({ minPrice: priceRange[0], maxPrice: priceRange[1] }));
      }, [priceRange, dispatch]);

     const handlePriceRangeChange = (event, newValue) => {
        setPriceRange(newValue);
      };

        return(
        <div style={{width:"250px",height:"670px",border:"1px solid #ccc",marginLeft:"20px",marginTop:"10px"}}>
                        <p style={{fontWeight:"bold",marginLeft:"20px",fontSize:"20px"}}>Filter Products</p>     
                        <div className="menu">
                            <h2 className="cateHeader">category:</h2>
                               <p><Link to="/shop">Shop </Link></p>
                               <p><Link to="/TvItems">TVs & Appliances </Link></p>
                               <p><Link to="/menItems">Men </Link></p>
                               <p><Link to="/womenItems">Women </Link></p>
                               <p><Link to="/jewels">Jewels </Link></p>
                                
                          </div>      
                 <div className="range">
                                <label style={{color:"black",fontSize:"20PX",marginLeft:"50px"}}>
                                    Filter by Price:<br/>
                                  
                                     <Slider
                                        value={priceRange}
                                        onChange={handlePriceRangeChange}
                                        valueLabelDisplay="auto"
                                        min={0}
                                        max={1000}
                                        step={10}
                                        marks
                                        style={{width:"200px",marginLeft:"30px"}}
                                    />
                                </label><br/>
                              
                             </div>
                    </div>  )}

const mapStateToProps = state => ({
        
    filteredProducts: state.products.filteredProducts
  });

  const mapDispatchToProps =
  {
    filterProductsByPrice
  }

  export  default connect(mapStateToProps,mapDispatchToProps)(SideBar);