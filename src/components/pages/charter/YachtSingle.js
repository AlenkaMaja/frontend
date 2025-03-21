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
   

    useEffect(() => {
        fetch(`https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht/${id}`)
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
        </div>

        <div className="row featured">
            <h2>KEY FEATURES</h2>
            <div className="col-md-3 col-6 simbol">
            <img src="/ASA/img/ruler-svgrepo-com.svg" height={60} width={60} className="cart-icon ms-3" alt="ASA-ruler"/>
                
                <p>
                {post.acf.length}
                </p>
            </div>

          
            <div className="col-md-3 col-6 simbol">
            <img src="/ASA/img/captain-svgrepo-com.svg" height={60} width={60} className="cart-icon ms-3" alt="ASA-crew"/>
            <p>{post.acf.crew}</p>
            </div>
            <div className="col-md-3 col-6 simbol">
            <img src="/ASA/img/door-hanger-do-not-disturb-svgrepo-com.svg" height={60} width={60} className="cart-icon ms-3" alt="ASA-cabins"/>
            <p> {post.acf.cabins}</p>
            </div>
            <div className="col-md-3 col-6 simbol">
            <img src="/ASA/img/beds-hotel-svgrepo-com.svg" height={60} width={60} className="cart-icon ms-3" alt="ASA-sleeps"/>
                <p>{post.acf.sleeps}</p>
            </div>
        </div>
        <div className="row mt-4">
            <div className="col-md-6">
                <div className="card p-3">
                  <h4>Yacht Details</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Length:</strong> {post.acf.length}</li>
                    <li className="list-group-item"><strong>Beam:</strong> {post.acf.beam}</li>
                    <li className="list-group-item"><strong>Draft:</strong> {post.acf.draft}</li>
                    <li className="list-group-item"><strong>Cabins:</strong> {post.acf.cabins}</li>
                    <li className="list-group-item"><strong>Heads:</strong> {post.acf.heads}</li>
                    <li className="list-group-item"><strong>Sleeps:</strong> {post.acf.sleeps}</li>
                    <li className="list-group-item"><strong>Cabins Configuration:</strong> {post.acf.cabins_configuration}</li>
                    <li className="list-group-item"><strong>Crew Cabins:</strong> {post.acf.crew_cabins}</li>
                  </ul>
                </div>
            </div>
            

            <div className="col-md-6">
                <div className="card p-3">
                  <h4>Performance & Equipment</h4>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><strong>Builder:</strong> {post.acf.builder}</li>
                    <li className="list-group-item"><strong>Model:</strong> {post.acf.model}</li>
                    <li className="list-group-item"><strong>Build Year:</strong> {post.acf.build_year}</li>
                    <li className="list-group-item"><strong>Engine:</strong> {post.acf.engine}</li>
                    <li className="list-group-item"><strong>Cruising Speed:</strong> {post.acf.cruising_speed}</li>
                    <li className="list-group-item"><strong>Fuel Consumption:</strong> {post.acf.fuel_consumption}</li>
                    <li className="list-group-item"><strong>Tender:</strong> {post.acf.tender}</li>
                    <li className="list-group-item"><strong>Outboard Engine:</strong> {post.acf.outboard_engine}</li>
                  </ul>
                </div>
            </div>
        </div>  

            {/* Yacht Description */}
        <div className="col-md-12">
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
           
            
        

    </div>
<div className="container">
    <div className="row mt-5">
      <div className="col-md-10">
        <h3 className="text-uppercase mb-4">Interested in {post.acf.model}? Find out more!</h3>
        <p className="text-align-center mb-3">Send us your contact and desired weekly period, and we will revert to you with availability and official offer </p>
        
        <form action="contact" method="GET">
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Name &amp; Surname</label>
              <input type="text" name="name" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">E-mail address</label>
              <input type="email" name="email" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Telephone</label>
              <input type="text" name="telefon" className="form-control" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Company name *optional</label>
              <input type="text" name="tvrtka" className="form-control" />
            </div>
            <div className="col-md-12">
              <label className="form-label">Message</label>
              <textarea
                name="poruka"
                className="form-control  mb-3"
                defaultValue={""}
              />
              <button type="submit" className="btn btn-secondary">
                Send
              </button>
            </div>
          </div>
        </form>
      </div>

    </div>
</div> 
</div> 
   
);
};

export default YachtSingle;
           