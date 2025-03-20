import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";
import './Blog.css';


const Blog = () => {

    const [posts, setPosts] = useState([]);


    useEffect(
        () => {
        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category=38')
            .then(response => {
                return response.json();
            })
            .then(data => setPosts(data))
    },[]
);

        
return ( 
    <>
    <div className="container blog">
    <h1>Blog</h1>  
    <div>
        {posts.map(post => (
            <div className="row mb-5 pt-5">
                <div className="col-md-5">
                <MediaImg id={post.featured_media} size="full" />
                </div>
                <div className="col-md-6 offset-md-1">
                    <Link to={'/blog/' + post.slug}>
                    <h2 dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                    </Link>
                    <p className="generalije">
                
                    Published: <PostDate date={post.date}/> <br />
                    By: <PostAuthor authorID={post.author}/>
                    <p dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                    </p>
                
                </div>    
            </div>    
        ))}
     </div>
   </div>
   </>    
  );
};

export default Blog;