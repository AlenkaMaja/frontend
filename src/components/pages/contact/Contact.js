import React, { useEffect, useState } from "react";
import './Contact.css';

const Contact = () => {
 
  
  const [data, setData] = useState(null);

  useEffect(
        () => {

            fetch('https://adriaticsailingadventure.com/backend/wp-json/wp/v2/pages/48')
            .then(response => response.json())
            .then(data => setData(data))
        }, []
    );
  
    if(!data) return <p>Loading....</p>
  return ( 
    <section className="contacts">
  <div className="container">
    <div className="row mt-5">
      <div className="col-md-6">
        <h3 className="text-uppercase mb-4">Contact</h3>
        <p>
          Please feel free to send us your request or call us on our phone for
          any questions you might have. If you are looking for a boat charter,
          just let us know your travel period and number of persons travelling
          with you in your inquiry.
        </p>
        <p>
          Our booking office is staying at your disposal for all additional
          informations about availabale charter boats, prices, destinations and
          everything else conected with our charter and boat services.
        </p>
        <address>
          <strong>Adriatic Sailing ltd / Jadranska jedrenja d.o.o.</strong>
          <br />
          Obala kralja Tomislava 10
          <br />
          HR-21212 Kastel Gomilica
          <br />
          Croatia
          <br />
          <abbr title="Phone">Tel:</abbr>{" "}
          <a href="tel:+38517899700">+385 (0)1 7899-700</a>
          <br />
          <abbr title="Fax">Fax:</abbr> +385 (0)1 7899-799
        </address>
      </div>
      <div className="col-md-6">
        <form action="contact.html" method="GET">
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
              <label className="form-label">Company name</label>
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


  
   <div dangerouslySetInnerHTML={{__html: data.content.rendered}} />
 </section>     
  );
};

export default Contact;
