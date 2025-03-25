import React, { useEffect, useState } from "react";
import MediaImg from "../media/MediaImg";
import '../gutenberg.css';
import './Faq.css';


const Faq = () => {
  
  const [pageData, setPageData] = useState(null);
     
       useEffect(
             () => {
     
                 fetch("https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/420")
                 .then(response => response.json())
                 .then(data => setPageData(data))
             }, []
         );
      if(!pageData) return <p>Loading....</p>

  return ( 
  
    <div className="faq">
    <div className="container faq">
      <div className="row">
        <div className="col-md-12">

        <MediaImg id={pageData.featured_media} size="full" />
        <h1 dangerouslySetInnerHTML={{__html: pageData.title.rendered}} /> 
        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} /> 
        </div>
      </div>
    </div> 
    </div>
);
}

export default Faq;
