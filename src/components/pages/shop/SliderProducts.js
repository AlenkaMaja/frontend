import './Shop.css'
import React, { useEffect, useState }  from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from './ProductCard';



const SliderProducts = ({category, limit, sectionName}) => {
   const [products, setProducts] = useState([]); 

   var heroCategories = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    swipeToSlide:true
  };

useEffect(
  () => {
    fetch('https://dummyjson.com/products/category/' + category + '?limit=' + limit)
      .then(res => res.json())
      .then(data => setProducts(data.products))
  },[category, limit]
)    

return ( 
<>
<div className="container slider-products mt-5 mb-5">
  <h2 className="pt-4 pb-2">{sectionName}</h2>
<Slider {...heroCategories}>
  
  {products.map((product) => (
  <ProductCard product={product} />     
  
))}
</Slider> 
</div> 

</>  




);
};

export default SliderProducts;
