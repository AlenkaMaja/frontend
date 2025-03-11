import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faTag, faToolbox, faCouch } from "@fortawesome/free-solid-svg-icons";
import MediaImg from "../media/MediaImg";
import '../gutenberg.css';
import './Charter.css';

const YachtsList = () => {
    const [yachts, setYachts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [locations, setLocations] = useState({});
    const [amenities, setAmenities] = useState({});
    const [equipment, setEquipment] = useState({});

    useEffect(() => {
        const fetchYachts = async () => {
            try {
                const response = await fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/yacht');
                const data = await response.json();
                setYachts(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching yachts:', error);
                setLoading(false);
            }
        };
        fetchYachts();
    }, []);

    useEffect(() => {
        fetch('https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/location')
            .then(res => res.json())
            .then(data => {
                const locationMap = {};
                data.forEach(loc => locationMap[loc.id] = loc.name);
                setLocations(locationMap);
            });
    }, []);
    useEffect(() => {
        fetch('https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/amenities')
            .then(res => res.json())
            .then(data => {
                const amenitiesMap = {};
                data.forEach(amenity => amenitiesMap[amenity.id] = amenity.name);
                setAmenities(amenitiesMap);
            });
    }, []);

    // Fetch equipment
    useEffect(() => {
        fetch('https://www.adriaticsailingadventure.com/backend/wp-json/wp/v2/equipment')
            .then(res => res.json())
            .then(data => {
                const equipmentMap = {};
                data.forEach(equip => equipmentMap[equip.id] = equip.name);
                setEquipment(equipmentMap);
            });
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
    <div className="container yachtslist ">
        <div className="title">
        <h1>Crewed and bareboat Catamarans</h1>
        </div> 
            <ul style={{
                display: 'grid',
                gap: '20px',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
            }}>
                {yachts.map((yacht) => (
                    <li key={yacht.id} style={{
                        border: '1px solid #ddd',
                        borderRadius: '8px',
                        padding: '10px',
                        textAlign: 'center'
                    }}>
                        <Link to={yacht.link} target="_blank" rel="noopener noreferrer">
                            <MediaImg 
                                id={yacht.featured_media} 
                                alt={yacht.name} 
                                size="medium"
                                style={{
                                    display: 'block',
                                    margin: '0 auto',
                                    padding: '10px',
                                    maxWidth: '100%',
                                    borderRadius: '8px'
                                }}
                            />
                            <h2>{yacht.title.rendered}</h2>
                        </Link>
                        <p>
                            <FontAwesomeIcon icon={faMapMarkerAlt} style={{ color: '#FF6347', marginRight: '5px' }} />
                            <strong>Location:</strong> {yacht.location.map(id => locations[id] || 'Unknown').join(', ')}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faTag} style={{ color: '#FFD700', marginRight: '5px' }} />
                            <strong>Lowest Price:</strong> {yacht.meta?.lowest_price || 'N/A'}
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faCouch} style={{ color: '#32CD32', marginRight: '5px' }} />
                            <strong>Amenities:</strong> {" "}
                                {yacht.amenities?.map((id) => amenities[id] || "Unknown").join(", ")}
                            </p>
                        <p>
                            <FontAwesomeIcon icon={faToolbox} style={{ color: '#4682B4', marginRight: '5px' }} />
                            <strong>Equipment:</strong> {" "}
                                {yacht.equipment?.map((id) => equipment[id] || "").join(", ")}
                            </p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YachtsList;