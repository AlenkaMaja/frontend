import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";
import './CategoryPage.css';



const CategoryPage = () => {

   

    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect(
        () => {

            fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?categories=' + id)
            .then(response => response.json())
            .then(data => setPost(data))
        }, [id]
    );
    if(!post) return <p>Loading...</p>;

  return( 
    
    <>
        <div className="container blog">
            <h1>Blog<</h1>  
            <div>
                {post.map(post => (
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

export default CategoryPage;