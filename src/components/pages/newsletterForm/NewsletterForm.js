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
       
       <h2>Enter your email to receive latest news. </h2>      
         {error && <p style={{ color: "red" }}>{error}</p>}
         {success && <p style={{ color: "green" }}>{success}</p>}
       <label htmlFor="email" className="sr-only"></label>
       <input  
        type="email"  
        value={email}  
        onChange={(e) => setEmail(e.target.value)}  
        placeholder="Your email"  
        required  
      />  
      <button type="submit">Subscribe</button>  
    </form>  
  );  
};  

export default NewsletterForm;