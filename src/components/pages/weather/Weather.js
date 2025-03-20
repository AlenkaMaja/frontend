import React, { useEffect, useState } from "react";
import MediaImg from "../media/MediaImg";
import {Link} from "react-router-dom";
import '../gutenberg.css';
import './Weather.css';


const Weather = () => {
  
  const [pageData, setPageData] = useState(null);
     
       useEffect(
             () => {
     
                 fetch("https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/435")
                 .then(response => response.json())
                 .then(data => setPageData(data))
             }, []
         );
      if(!pageData) return <p>Loading....</p>
  return ( 
<>
  <div className="weather">
    <div className="container weather">
      <div className="row">
        <div className="col-md-12">

        <MediaImg id={pageData.featured_media} size="full" />
        <h1 dangerouslySetInnerHTML={{__html: pageData.title.rendered}} /> 
        <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} /> 
        </div>
      </div>
      <div className="row">
        <div className="col-md-4"> 
        </div>
        <div className="col-md-4 button">
        <Link to="https://meteo.hr/index_en.php" target="_blank" class="btn btn-outline-dark">Check the weather in Croatia</Link>
        </div>  
        <div className="col-md-4">
        </div>
      </div>
    </div>
  </div>
</>
  );
};

export default Weather;
