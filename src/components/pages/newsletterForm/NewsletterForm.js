import React, {useState} from 'react';  
import { supabase } from "./supabaseClient";
import "./NewsletterForm.css";

const NewsletterForm = () => { 
const [email, setEmail] = useState(""); 
const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {  
    e.preventDefault(); 
    setError("");
    setSuccess("");

    // Check if email is valid
    if (!/\S+@\S+\.\S+/.test(email)) {
        setError("Please enter a valid email");
        return;
      }
  
      // Insert email into Supabase
      const { error: insertError } = await supabase
        .from("newsletters")
        .insert([{ email }]);
  
      if (insertError) {
        setError("Error subscribing to newsletter: " + insertError.message);
      } else {
        setSuccess("Thank you for subscribing!");
        setEmail(""); // Clear the input field
      }
  
      // Clear messages after 3 seconds  
      setTimeout(() => {  
        setError("");  
        setSuccess("");  
      }, 3000);
    };
  

return (  
  <form onSubmit={handleSubmit}>  
     <div className="container mt-5"> 
     <div className="row justify-content-center">
    <h1>Enter your email to receive the latest news! </h1>      
         {error && <p style={{ color: "red" }}>{error}</p>}
         {success && <p style={{ color: "green" }}>{success}</p>}
    <div className="container ms-5">
      <div className="row justify-content-center newsletter-form">
        <div className="col-md-10 ms-5">
          <div className="d-flex flex-sm-column flex-md-row align-items-center gap-2">
            <label htmlFor="email" className="sr-only"></label>
              <input  
              type="email"  
              value={email}  
              onChange={(e) => setEmail(e.target.value)}  
              placeholder="Your email"  
              required 
              className="form-control"style={{ height: "45px", maxWidth:"300px", marginBottom: "0" }} 
              /> 
            <button className="submit btn btn-light h-100" type="submit" style={{ height: "45px", marginBottom: "20px" }}>Subscribe
            </button>
          </div>
        </div>
      </div> 
    </div> 
    </div>
    </div> 
  </form>  
);  
};  

export default NewsletterForm;