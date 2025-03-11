import React, { useEffect, useState } from "react";
import '../gutenberg.css';
import './Charter.css';



const Charter = () => {
 const [data, setData] = useState(null);
   
     useEffect(
           () => {
   
               fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/39')
               .then(response => response.json())
               .then(data => setData(data))
           }, []
       );
     
       if(!data) return <p>Loading....</p>
   return ( 
 <div className="container-flex charter">
     <div dangerouslySetInnerHTML={{__html: data.content.rendered}} /> 
   </div> 
    
   );
 };

    export default Charter;