import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";
import './Blog.css';


const Blog = () => {

    const [posts, setPosts] = useState([]);

    const [destinations, setDestinations] = useState([]);
    const [routes, setRoutes] = useState([]);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-destination_id')
            .then(response => response.json())
            .then(data => setDestinations(data));

        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-route_id')
            .then(response => response.json())
            .then(data => setRoutes(data));

        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-experience_id')
            .then(response => response.json())
            .then(data => setExperiences(data));
    }, []);

return ( 

<div className="container blog">
    <h1>BLOG</h1>  
   
        <h2>DESTINATIONS</h2>
        {destinations.map(post => {
            return(
        <div key={post.id} className="row mb-5 pt-5">
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
            );
  
    
})}

   
        <h2>Routes</h2>
        {routes.map(post => {
            return(
            <div key={post.id} className="row mb-5 pt-5">
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
        );
      
})}
    
        <h2>Experiences</h2>
        {experiences.map(post => {
            return(
            <div key={post.id} className="row mb-5 pt-5">
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
            );
       
})}



</div>

     
);
}

export default Blog;