import React, { useEffect, useState }  from "react";



const Comments = ({postId}) => {

    const [comments, setComments] = useState([]);

    useEffect(
        () => {
            fetch('https://adriaticsailingadventure.com/comments?postId=$(postId)')
            .then(response => response.json())
            .then(data => setComments(data));
        }, [postId]
    );   


  return ( 
    <div>
   <h2>Comments</h2>  
    {comments.map(comment => (
        <div key={comment.id} className="mb-3">
            <h5>{comment.name}</h5>
            <p>{comment.body}</p>
            <small>{comment.email}</small>
        </div>
    ))}
   </div>    
  );
};

export default Comments;