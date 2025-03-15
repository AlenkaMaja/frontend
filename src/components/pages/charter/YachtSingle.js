import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Tabs, Tab } from "@mui/material";
import MediaImg from "../media/MediaImg";
import '../gutenberg.css';

const YachtSingle = ({ match }) => {
    const [yacht, setYacht] = useState(null);
    const [loading, setLoading] = useState(true);
    const [tabIndex, setTabIndex] = useState(0);

    useEffect(() => {
        const fetchYacht = async () => {
            try {
                const response = await fetch(`https://adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht/${match.params.id}`);
                const data = await response.json();
                setYacht(data);
            } catch (error) {
                console.error("Error fetching yacht:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchYacht();
    }, [match.params.id]);

    if (loading) return <p>Loading...</p>;
    if (!yacht) return <p>Yacht not found</p>;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="container">
            {/* Yacht Image Slider */}
            <Slider {...sliderSettings} style={{ maxWidth: "100%", margin: "auto" }}>
                {Object.keys(yacht.acf).filter(key => key.includes("photo")).map((key, index) => (
                    <div key={index}>
                        <MediaImg id={yacht.acf[key]} alt={`Yacht ${index}`} />
                    </div>
                ))}
            </Slider>

            {/* Yacht Description */}
            <div className="col-md-12">
                <h1>{yacht.title.rendered}</h1>
                <div dangerouslySetInnerHTML={{ __html: yacht.content.rendered }} />
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
                {tabIndex === 0 && <p>{yacht.acf.lenght}, {yacht.acf.beam}, {yacht.acf.draft}...</p>}
                {tabIndex === 1 && <p>{yacht.equipment?.join(", ") || "No equipment data"}</p>}
                {tabIndex === 2 && <p>{yacht.acf.water_toys}</p>}
                {tabIndex === 3 && <p>{yacht.location?.join(", ") || "Location not available"}</p>}
                {tabIndex === 4 && <p>Lowest: {yacht.acf.lowest_weekly_price}, Highest: {yacht.acf.highest_weekly_price}</p>}
                {tabIndex === 5 && <p>Reviews will go here...</p>}
            </div>

            {/* Request Form */}
            <div className="request-form">
                <h2>Send a Request</h2>
                <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default YachtSingle;
