import React, { useEffect, useState } from "react";
const PostAuthor= ({ authorID }) => {

    const [author, setAuthor] =useState(null);
    
    
   useEffect(() => {
       if(!authorID) return;
       fetch(
         `https://adriaticsailingadventure.com/backend/wp-json/wp/v2/users/` + authorID
       )
         .then((response) => response.json())
         .then((data) => setAuthor(data));
     }, [authorID]); 

     if (!author) return <p>searching for author name...</p>;

  
  return (
    <span>{author.name}</span>
        
  );
}
export default PostAuthor;