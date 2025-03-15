import React, { useEffect, useState } from "react";
import './About.css';


const About = () => {
  
  const [pageData, setPageData] = useState(null);
     
       useEffect(
             () => {
     
                 fetch("https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/36")
                 .then(response => response.json())
                 .then(data => setPageData(data))
             }, []
         );
      if(!pageData) return <p>Loading....</p>
  return ( 
<>
<div className="about">
<div className="container about">
  <div className="row">
    <div className="col-md-12">
     
     
    <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} /> 
    </div>
  </div>
</div> 
<div className="b-example-divider"></div>

<div className="container px-4 py-5" id="icon-grid">
  <h2 className="pb-2 border-bottom">8 Good Reasons to Book with Adriatic Sailing Adventure</h2>

  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Personalised service</h3>
        <p>We take care of each tiny detail, so you can fully enjoy in your vacation.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
        <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Extraordinary Charter Experience</h3>
        <p>We are with you all the way, enabling you to experience the real thing.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Know-how</h3>
        <p>Up-to-date yacht charter knowledge and numerous first hand contacts.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 me-auto ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Personal experience</h3>
        <p>Adriatic is our home, and we are not only experienced sales persons but also real adventurers living the life on and by the sea.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Financial security</h3>
        <p>All our business activities are carefully planned and we are part of organisation taking care of different aspects in yacht industry.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Secure contracts</h3>
        <p>We are an authorized user of the MYBA Charter E-contract and proud IYBA member securing you fair and safe charter conditions.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Independent advice</h3>
        <p>Our main goal is to advice you in the best possible manner, while we are not running after the numbers of closed bookings, but quality of service we offer.</p>
      </div>
    </div>
    <div className="col d-flex align-items-start">
      <svg className="bi text-body-secondary flex-shrink-0 me-3" width="1.75em" height="1.75em"></svg>
      <div>
      <img src="/ASA/img/white-wind-rose-svgrepo-com.svg" height="90" width="90" className="ms-5 ps-1 mb-3" alt="wind-rose" />
        <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Human touch</h3>
        <p>We are welcoming our guests but saying goodbay to new friends.</p>
      </div>
    </div>
  </div>
</div>

</div>
</>   
  );
};

export default About;
