import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MediaImg from "./MediaImg";
import PostAuthor from "./PostAuthor";
import PostDate from "./PostDate";




const AuthorsPage = () => {

    const {author} = useParams();
    const [authors, setAuthors] = useState([]);
    const [post,setPosts] = useState([]);

    useEffect(
        () => {

            fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/users?slug=${author}')
            .then((response) => response.json())
            .then((data) => {
                setAuthors(data);
            });
        }, [author]);
    
        const postId = authors[0]?.id;

        useEffect(() => {
            if (postId) {
    
                fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/posts?_embed&author=${postId}')
                .then((response) => response.json())
                .then((data) => {
                    setPosts(data);
                });
            }
            }, [postId]);
            

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
            <MediaImg id={post.featured_media} size="full" />
            
            <p>
            Author: <PostAuthor authorID={post.author} />
        
            </p>
            </div>
            <div dangerouslySetInnerHTML={{__html: post.content.rendered }} />
        </div>
    </div>
  </div>

  </>
  );
};

export default AuthorsPage;