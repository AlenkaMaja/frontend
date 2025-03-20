import React from "react";
import './Home.css';
import { Link } from "react-router-dom";

import NewsletterForm from "../newsletterForm/NewsletterForm";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
 
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };
  return (
    <>
    <section id="header-image" />
<div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="main-Photo">
         <img src='./ASA/img/naslovna-desktop.jpg' alt=""/>
        </div>
      </div>
    </div>
</div>

<section id="hero">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="heading-text nav-item">
        <Link to="/blog">
            <span>BLOG</span>
        </Link>
        </h3>
      </div>
    </div>


     <div className="heading" id="home_title">
      <h3 clas="heading-text primary-font s-text-color s-text-border">
      <a href="blog.html/routes">
        <span>Adriatic Revealed: The Perfect Route to discover Prvić
          <br />
        </span>
      </a>
      </h3>
     </div>

     <div className="item js-item-button button justify-align pc-hidden tablet-landscape-hidden tablet-hidden button-size--small button-hover--none button-color-brand"
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingBottom: "3%"
            }}
            decoration="none"
          >
      <a href="blog.html/routes" target="_self" className="button" style={{ borderRadius: 1, borderWidth: 1 }}>Read more</a>
    </div>
    <br />
    </div>
</section>
<section id="recent-posts">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <a href="/" display="block" position="relative">
            <img
              src="../ASA/img/ASA-naslovna.jpg"
              alt=""
              width=""
              height=""
              position="relative"
              sizes="(max-width:767px) 100vw, (max-width:960px) 50vw, 33vw"
            />
            <div className="video-icon" position="absolute">
              <div className="position-absolute top-150 start-40 translate-middle">
                <i className="fa-regular fa-circle-play" position="absolute" />
              </div>
            </div>
          </a>
          <h4
            className="heading-text nav-item"
            style={{ letterSpacing: "0.03em font-size:26px" }}
          >
          
            <a href="blog-single.html">
              <font color="/7099bf">NEWS</font>
            </a>
          </h4>
          <div className="heading" id="home_title">
            <h3
              className="heading-text primary-font s-text-color s-text-border"
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
                paddingBottom: "3%"
              }}
            >
              <Link to="/news">
                <span
                  style={{ color: "rgb(250,250,250)", textDecoration: "none" }}
                >
                  Adriatic Revealed: The Perfect Route to discover Prvić
                </span>
              </Link>
            </h3>
          </div>
          <div
            className="item js-item-button button justify-align pc-hidden tablet-landscape-hidden tablet-hidden button-size--small button-hover--none button-color-brand"
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingBottom: "3%"
            }}
            decoration="none"
          >
            <a
              href="news.html"
              target="_self"
              className="button"
              style={{ borderRadius: 1, borderWidth: 1 }}
            >
              Read more
            </a>
          </div>
        </div>
        <div className="col-md-4">
          <a href="/">
            <img
              src="../ASA/img/ASA-Prvic-luka.jpg"
              alt=""
              width=""
              height=""
              sizes="(max-width:767px) 100vw, (max-width:960px) 50vw, 33vw"
            />
          </a>
          <h4
            className="heading-text nav-item"
            style={{ letterSpacing: "0.03em font-size:26px" }}
          >
            <a href="blog.html/destinations">
              <font color="/7099bf">DESTINATIONS</font>
            </a>
          </h4>
          <div className="heading" id="home_title">
            <h3
              clas="heading-text primary-font s-text-color s-text-border"
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
                paddingBottom: "3%"
              }}
            >
              <a href="blog.html/destinations">
                <span style={{ color: "rgb(250,250,250)" }}>
                  Adriatic at its best: Small paradise that still needs to be
                  discovered!
                </span>
              </a>
            </h3>
          </div>
          <div
            className="item js-item-button button justify-align pc-hidden tablet-landscape-hidden tablet-hidden button-size--small button-hover--none button-color-brand"
            decoration="none"
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingBottom: "3%"
            }}
          >
            <Link to="/news"
              target="_self"
              className="button"
              style={{ borderRadius: 1, borderWidth: 1 }}
            >
              Read more
            </Link>
          </div>
        </div>
        <div className="col-md-4">
          <a href="/">
            <img
              src="/ASA/img/korcula.jpg"
              alt=""
              width=""
              height=""
              sizes="(max-width:767px) 100vw, (max-width:960px) 50vw, 33vw"
            />
          </a>
          <h4
            className="heading-text nav-item"
            style={{ letterSpacing: "0.03em font-size:26px" }}
          >
            <a href="blog.html/experiences">
              <font color="/7099bf">EXPERIENCES</font>
            </a>
          </h4>
          <div className="heading" id="home_title">
            <h3
              clas="heading-text primary-font s-text-color s-text-border"
              style={{
                paddingRight: "10%",
                paddingLeft: "10%",
                paddingBottom: "3%"
              }}
            >
              <a href="blog.html/experiences">
                <span style={{ color: "rgb(250,250,250)" }}>
                  Charm of the Adriatic: The most beautiful city on an island
                </span>
              </a>
            </h3>
          </div>
          <div
            className="item js-item-button button justify-align pc-hidden tablet-landscape-hidden tablet-hidden button-size--small button-hover--none button-color-brand"
            style={{
              paddingRight: "10%",
              paddingLeft: "10%",
              paddingBottom: "3%"
            }}
            decoration="none"
          >
            <a
              href="blog.html/news"
              target="_self"
              className="button"
              style={{ borderRadius: 1, borderWidth: 1 }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="yachtcharter">
    <div className="container mt-10">
      <div className="row">
        <div className="col-md-12">
          <div clas="yachtcharter-photo">
            <img src="/ASA/img/desktop-yachtcharter.jpg" alt="yachtcharter" />
          </div>
        </div>
        <div className="container" style={{ backgroundColor: "/02182b" }}>
          <div className="row">
            <div className="col-md-12">
              <h3
                className="heading-text nav-item"
                style={{
                  paddingTop: "20px",
                  paddingRight: "15%",
                  paddingLeft: "15%",
                  paddingBottom: "3%",
                  letterSpacing: 2
                }}
              >
                <Link to="/Charter">
                  <span className="font-style" style={{ fontSize: 16 }}>
                    <font color="/b69c4a">
                      <span style={{ caretColor: "rgb(182,156,74)" }}>
                        CHARTER
                      </span>
                    </font>
                  </span>
                </Link>
                <span clas="font-size: 16px;" />
              </h3>
            </div>
            <div className="heading" id="home_title">
              <h1
                clas="heading-text primary-font s-text-color s-text-border"
                decoration="none"
                style={{
                  paddingRight: "10%",
                  paddingLeft: "10%",
                  paddingBottom: 20,
                  paddingTop: 10
                }}
              >
                <a href="charter.html/boatlistings">
                  <span style={{ color: "rgb(250,250,250)" }}>
                  Adriatic Sailing Adventure: Your direct route to discovering the Adriatic Sea in style!
                    <br />
                  </span>
                </a>
              </h1>
            </div>
            <div className="container">
              <div className="heading heading-center text-center">
                <span>
                Our goal is to help you find the perfect boat for your next Adriatic sailing adventure!
                </span>
                <hr />
              </div>
              <div
                className="row team-members m-b-20 m-auto equalize"
                data-equalize-item=".icon-box"
              >
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/catamaran-crewed.jpg" alt="crewed"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/luxury-crewed-yachts/">
                        Luxury Crewed Yachts
                      </a>
                    </h2>
                    <p>
                    Find your dream boat and an exceptional crew from our selection of premium Croatian crewed yachts.
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/sailingyacht.jpg" alt="sailingyacht"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/sailing-yachts">
                        Sailing Yachts
                      </a>
                    </h2>
                    <p>Discover the best renowned world brands</p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/catamaran-lagoon55.jpg" alt="catamaran"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <Link to="/yachts">
                        Crewed and bareboat Catamarans{" "}
                      </Link>
                    </h2>
                    <p>
                      Croatia catamaran charter fleet is one of the biggest in
                      the World{" "}
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/motor-yacht.jpg" alt="yacht"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/motor-yachts/">
                        Motor Yachts
                      </a>
                    </h2>
                    <p>
                      Find the best motor yacht on Adriatic, with or without
                      crew
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/motor-sailor.jpg" alt="cruisers"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/cruise-ships/">
                        Motor-sailors and Cruise Ships
                      </a>
                    </h2>
                    <p>
                      Croatia has one of a kind production of small Cruise Ships
                      and costum-made Motor-Sailor Yachts
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/regatta-racing.jpg" alt="racing"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/performance-sailing/">
                        Performance Sailing Boats
                      </a>
                    </h2>
                    <p>
                    Are you a sailing race enthusiast? Don't worry—there are plenty of exciting and challenging races in the Adriatic, both inshore and offshore, as well as excellent class racing series. Feel free to ask us for a quote and join one of the renowned Adriatic Racing Series or Open Class Regattas!
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/sailing-training.jpg" alt="learn-how"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <Link to="/Schools">
                        Sailing schools, education and trainings
                      </Link>
                    </h2>
                    <p>
                    Want to learn a new skill or improve your practice? Let us know, and we’ll organize the perfect program for you!
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/get-a-buoy.jpg" alt="join"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <a href="https://adriaticsailingadventure.com/charter/cabin-charter/">
                        Daily or weekend sailing excursions
                      </a>
                    </h2>
                    <p>
                    Never rented a boat before and worried about your budget? Try a day sailing or weekend charter to get started! You can share the boat with others or sail on your own—an affordable way to experience the water. Give us a call because we have the perfect solution for you!
                    </p>
                    <p />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icon-box box-type effect medium center process">
                    <div className="icon">
                      <img
                        src="/ASA/img/buying-a-boat.jpg"  alt="brand-new-boat"
                        className="ikona"
                      />
                    </div>
                    <h2>
                      <Link to="/Ownership">
                        Become a yacht owner
                      </Link>
                    </h2>
                    <p>
                    Dreaming of owning a boat? Why not register it for commercial use and recover some of your investment—or at least cover the basic costs? Explore our charter management opportunities and see how we can help. Feel free to reach out!
                    </p>
                    <p />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="newsletter-registration">
    <div className="container">
      <div className="row">
        <div className="col-md-12 mt-5 display-flex">
        <img src="/ASA/img/newsletter-offers.png"  alt="newsletter" className="ikona"
        />
      </div>
    </div>
    <div className="container-form d-block justify-content mt-5 d-md-flex">
      <div className="row-form">
        <div className="d-grid gap-2 d-md-flex justify-content-md">
          <NewsletterForm/>    
        </div>
      </div>
    </div>  
    </div>
  </section>

<section className="slick-lightbox container py-5">
  <Slider {...settings}>
    <div>
      <a href="/ASA/img/logo-nautorswan.png" data-lightbox="galerija">
        <img src="/ASA/img/logo-nautorswan.png" height="250"  alt="nautor-swan-logo" />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/cata-lagoon-logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/cata-lagoon-logo.png" height="200"   alt="lagoon-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/ferretti-yachts-logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/ferretti-yachts-logo.png" height="250"  alt="ferretti-yachts-logo"  />
      </a>
    </div>
    <div>
      <a href="/ASA/img/sunseeker-logo.svg" data-lightbox="galerija">
        <img src="/ASA/img/sunseeker-logo.svg" height="250"  alt=""  />
      </a>
    </div>
    <div>
      <a href="/ASA/img/galeon_yachts_logo.png" data-lightbox="galerija">
        <img src="/ASA/img/galeon_yachts_logo.png" height="200"  alt="galeon-yachts-logo"  />
      </a>
    </div>
    <div>
      <a href="/ASA/img/sunreeef-yachts-logo.png" data-lightbox="galerija">
        <img src="/ASA/img/sunreef-yachts-logo.png" height="200"  alt="sunreef-logo"  />
      </a>
    </div>
    <div>
      <a href="/ASA/img/jeanneau logo.png" data-lightbox="galerija">
        <img src="/ASA/img/jeanneau logo.png" height="200"  alt="jeanneau-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/X-Yachts-Logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/X-Yachts-Logo.png" height="200"  alt="x-yachts-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/logo_solaris-dark.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/logo_solaris-dark.png" height="250"  alt="solaris-yachts-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/BALI-CATAMARANS_LOGO.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/BALI-CATAMARANS_LOGO.png" height="200"  alt="bali-catamarans-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/beneteau-logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/beneteau-logo.png" height="300"  alt="beneteau-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/azimut-yachts-logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/azimut-yachts-logo.png" height="250"  alt="azimut-yachts-logo"  />
      </a>
    </div>
    <div>
      <a
        href="/ASA/img/dufour-catamarans-logo.png"
        data-lightbox="galerija"
      >
        <img src="/ASA/img/dufour-catamarans-logo.png" height="200"  alt="azimut-yachts-logo"  />
      </a>
    </div>                    

  
  </Slider>
</section>


</>

    
  
);

};

export default Home;
