import React, { useEffect, useState } from "react";


const About = () => {
  const [data, setData] = useState(null);
  
    useEffect(
          () => {
  
              fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/36')
              .then(response => response.json())
              .then(data => setData(data))
          }, []
      );
    
      if(!data) return <p>Loading....</p>
  return ( 
<div className="container">
    <div dangerouslySetInnerHTML={{__html: data.content.rendered}} /> 
  </div> 
   
  );
};

export default About;
