import React, { useEffect, useState } from "react";
import MediaImg from "../media/MediaImg";

import '../gutenberg.css';



const Ports = () => {
  
  const [pageData, setPageData] = useState(null);
     
       useEffect(
             () => {
     
                 fetch("https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/1078")
                 .then(response => response.json())
                 .then(data => setPageData(data))
             }, []
         );
      if(!pageData) return <p>Loading....</p>
  return ( 
    <div className="container ports">
        <div className="row">
            <div className="col-md-12 text-center mt-2 mb-5">
                <h1 dangerouslySetInnerHTML={{__html: pageData.title.rendered}} /> 
            </div> 
        </div> 
        <div className="col-md-12 mt-1">
            <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} /> 
        </div> 
    </div>
  );
};

export default Ports;
