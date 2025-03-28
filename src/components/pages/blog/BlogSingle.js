import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaImg from "../media/MediaImg";
import PostDate from "./PostDate";
import PostAuthor from "./PostAuthor";
import '../gutenberg.css'
import './Blog.css';


const BlogSingle = () => {

    const {id} = useParams();
    const [post,setPost] = useState(null);

    useEffect(
        () => {

            fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?slug=' +id)
            .then(response => response.json())
            .then(data => setPost(data[0]))
        }, [id]
    );
    if(!post) return <p>Loading...</p>;

  return( 
  <>
  <div className="single-post container">
    <div className="row">
        <div className="col-md-10 m-auto">
            <h1 dangerouslySetInnerHTML={{__html: post.title.rendered}} /> 
            <div className="generalije">
            <p>
            Published: <PostDate date={post.date}/>
            </p>
            <div className="container">
                <div className="center-img">
                <MediaImg id={post.featured_media} size="full" class="img-fluid" alt="Centered Image"/>
                </div>
            </div>
            <p>
            Author: <PostAuthor authorID={post.author} />
        
            </p>
        </div>
        <div className="post-content">
            <div dangerouslySetInnerHTML={{__html: post.content.rendered }} />
            </div>
        </div>
    </div>
</div>

  </>
  );
};

export default BlogSingle;