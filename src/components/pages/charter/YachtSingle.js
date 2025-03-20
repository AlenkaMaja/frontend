import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tabs, Tab } from "@mui/material";
import MediaImg from "../media/MediaImg";
import '../gutenberg.css';

const YachtSingle = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [tabIndex, setTabIndex] = useState(0);
    const [yacht, setYacht] = useState(null);

    useEffect(() => {
       fetch('https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht/${id}')
       .then((response) => response.json())
       .then((data) => setPost(data));
    }, [id]);

   
    
    if (!post) return  <p>Loading...</p>;

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplayspeed: 3000
    };

    return (
        <div className="yacht-single container">
            <div className="row">
                <div className="col-md-10 m-auto">
                    <h1 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                
            {/* Yacht Image Slider */}
            <Slider {...sliderSettings} style={{ maxWidth: "100%", margin: "auto" }}>
                <MediaImg id={post.acf.main_photo} size="full" />
                <MediaImg id={post.acf.Exterior_photo} size="full" />
                <MediaImg id={post.acf.aerial_photo} size="full" />
                <MediaImg id={post.acf.flybridge} size="full" />
                <MediaImg id={post.acf.cockpit} size="full" />
                <MediaImg id={post.acf.bow_area} size="full" />
                <MediaImg id={post.acf.galley} size="full" />
                <MediaImg id={post.acf.master_cabin} size="full" />
                <MediaImg id={post.acf.bathroom} size="full" />
                <MediaImg id={post.acf.guest_cabin} size="full" />
                <MediaImg id={post.acf.life_style} size="full" />
                <MediaImg id={post.acf.layout} size="full" />
            </Slider>

            <div className="row featured">
              
            <div className="col-md-3 col-6 simbol">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" fill="white" viewBox="0 0 512 512"><path d="M177.9 494.1c-18.7 18.7-49.1 18.7-67.9 0L17.9 401.9c-18.7-18.7-18.7-49.1 0-67.9l50.7-50.7 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 41.4-41.4 48 48c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-48-48 50.7-50.7c18.7-18.7 49.1-18.7 67.9 0l92.1 92.1c18.7 18.7 18.7 49.1 0 67.9L177.9 494.1z"/></svg>
              <p>
                {post.acf.length}
              </p>
            </div>
            <h2>KEY FEATURES</h2>
            <div className="col-md-3 col-6">
              <strong>Length:</strong> {post.acf.crew}
            </div>
            <div className="col-md-3 col-6">
              <strong>Cabins:</strong> {post.acf.cabins}
            </div>
            <div className="col-md-3 col-6">
              <strong>Sleeps:</strong> {post.acf.sleeps}
            </div>
          </div>

            {/* Yacht Description */}
            <div className="col-md-12">
                <h1>{yacht.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </div>
            </div>
            

            {/* Tabs */}
            <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
                <Tab label="Main Specifications" />
                <Tab label="Equipment" />
                <Tab label="Tender & Water Toys" />
                <Tab label="Location" />
                <Tab label="Price List" />
                <Tab label="Reviews" />
            </Tabs>

            {/* Tab Content */}
            <div>
                {tabIndex === 0 && <p>{yacht.acf.length}, {yacht.acf.beam}, {yacht.acf.draft}...</p>}
                {tabIndex === 1 && <p>{yacht.equipment?.join(", ") || "No equipment data"}</p>}
                {tabIndex === 2 && <p>{yacht.acf.water_toys}</p>}
                {tabIndex === 3 && <p>{yacht.location?.join(", ") || "Location not available"}</p>}
                {tabIndex === 4 && <p>Lowest: {yacht.acf.lowest_weekly_price}, Highest: {yacht.acf.highest_weekly_price}</p>}
                {tabIndex === 5 && <p>Reviews will go here...</p>}
            </div>

            {/* Request Form */}
            <div className="request-form">
                <h2>You are interested in this yacht? Send us your request with dates and other requirements!</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default YachtSingle;
