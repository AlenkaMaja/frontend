import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import PostDate from "../blog/PostDate";
import PostAuthor from "../blog/PostAuthor";
import './News.css';
import '../gutenberg.css';


const News = () => {

    const [posts, setPosts] = useState([]);

    const [arrivals, setArrivals] = useState([]);
    const [boatShows, setBoatShows] = useState([]);
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-arrivals_id')
            .then(response => response.json())
            .then(data => setArrivals(data));

        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-boat-shows_id')
            .then(response => response.json())
            .then(data => setBoatShows(data));

        fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?category-brands_id')
            .then(response => response.json())
            .then(data => setBrands(data));
    }, []);

  return ( 
    <>
    <div className="container news mt-5">
        <h1>NEWS</h1>  
    <div>
        <h2>New Arrivals</h2>
        {arrivals.map(post => (
            <div key={post.id}>
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
    </div>   
    ))}
    </div>
   </div>
   </>    
  );
};

export default News;