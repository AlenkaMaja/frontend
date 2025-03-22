import React, { useEffect, useState }  from "react";
import { Link, useNavigate } from 'react-router-dom';
import './LoginRegister.css';


const Login = () => {

const navigate = useNavigate();

useEffect( () => {
if(localStorage.getItem('token')){
 navigate('/');
  }

}, [navigate])
  
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  

  const [error, setError] = useState("");
  const [isLoading, setIsloading] = useState ("");

 const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name] : e.target.value
  });
 }


   const handleLogin =(e) => {
    e.preventDefault();
    setIsloading(true);

    fetch(
      'https://frontend.internetskimarketing.eu/backend/wp-json/jwt-auth/v1/token',{
      method: 'POST',
      headers: {
      'Content-Type': 'application/json'
      },
      body:JSON.stringify(form)
    }
  )
  .then((response) => {
    return response.json();
    })
    .then((data) => {
      console.log(data);
      setIsloading(false);
      setForm({
        username:"",
        password:""
      });
      if(data?.code) {
        setError("Invalid data, try again");
        return;
      }
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.user_display_name);
      navigate('/');
      window.location.reload();   
});
}
const [modalOpen, setModalOpen] = useState(false);

return (
    
<div className="container-fluid">
  <div className="row">
    <div className="col-md-6 login-intro">
      <Link to="/Home" className="me-auto">
        <img
          src="/ASA/img/ASA-logo-bijeli.jpeg"
          width={100}
          height={100}
          className="logo align-left-1"
          alt="ASA"
        />
      </Link>
      <div>
        <h1>Welcome to Adriatic Sailing Adventure!</h1>
        <p>
        Cast off the mooring lines, hoist your sails, and let the wind guide you toward a new adventure.
        </p>
      </div>
      <img
        src="/ASA/img/boat-porthole-svgrepo-com.svg"
        className="align-center"
        alt="porthole"
        width=""
        height=""
      />
    </div>
    <div className="col-md-6 login-form">
      <div>
        <h1>Welcome back!</h1>
        <p>Meet the best destinations today</p>
        <form className={isLoading ? "loading" : ""} onSubmit={handleLogin}>
          <label>E-mail or phone number</label>
          <input
            type="text" onChange={handleChange} required
            placeholder="Type your e-mail or phone number"
            className="mb-4"
            name="username" value={form.username}
          />
          <label>Password</label>
          <input
            type="password" onChange={handleChange} required
            placeholder="Type your password"
            className="mb-4"
            name="password" value={form.password}
          />
          <p className="text-end mb-4 mt-1">
            <Link to="/">Forgot Password?</Link>
          </p>
          
          { error ? <p className="alert alert-danger">{error}</p> : "" }

          
          <button type="submit" className="btn-left">Sign In</button>
          </form>
          <div className="sign-up-container">
          <p className="sign-up-text">"Don't have an account?"</p>
          <div className="btn-right">
          <button onClick={() => setModalOpen(true)}>Sign Up</button>
          </div>
          </div> 
          {modalOpen && (
        <div id="id01" className="modal d-block">
          <span onClick={() => setModalOpen(false)} className="close" title="Close Modal">
            ×
          </span>
          <form className="modal-content" action="/action_page.php">
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input type="text" placeholder="Enter Email" name="email" required />

            <label htmlFor="psw">
              <b>Password</b>
            </label>
            <input type="password" placeholder="Enter Password" name="psw" required />
  <label htmlFor="psw-repeat">
              <b>Repeat Password</b>
            </label>
            <input type="password" placeholder="Repeat Password" name="psw-repeat" required />

            <label>
              <input type="checkbox" defaultChecked name="remember" style={{marginBottom: 15 }}/> Remember me
            </label>

            <p>
              By creating an account you agree to our
              <a href="/" style={{color: "dodgerblue" }}>
                Terms & Privacy
              </a>
              
            </p>

            <div className="clearfix">
              <button type="button" onClick={() => setModalOpen(false)}className="cancelbtn">
                Cancel
              </button>
              <button type="submit" className="signupbtn">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      )}
        
      </div>
    </div>
  </div>
</div>

);

};

export default Login;
