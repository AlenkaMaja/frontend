import React, { useEffect, useState } from "react";








const YachtSingle = () => {

    
    const [post,setPost] = useState(null);

    useEffect(
        () => {

            fetch('https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/yachts')
            .then(response => response.json())
            .then(data => setPost(data[0]))
        }, []
    );
    if(!post) return <p>Loading...</p>;

  return( 
  <>
  <div className="single-post container">
    <div className="row">
        <div className="col-md-10 m-auto">
            <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} /> 
          
            <div dangerouslySetInnerHTML={{__html: post.content.rendered }} />
        </div>
    </div>
  </div>

  </>
  );
};

export default YachtSingle;