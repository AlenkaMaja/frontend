import React, { useEffect, useState } from "react";
import '../gutenberg.css';

const Schools = () => {
  const [pageData, setPageData] = useState(null);
  
    useEffect(
          () => {
  
              fetch("https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/2")
              .then(response => response.json())
              .then(data => setPageData(data))
          }, []
      );
    
      if(!pageData) return <p>Loading....</p>
  return ( 
<div className="container">
    <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} /> 
  </div> 
   
  );
};

export default Schools;
