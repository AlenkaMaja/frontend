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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulpulate ut
          laoreet velit ma.
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

          
          <button type="submit">Sign In</button>
          <p className="sign-up">
            "Don't have an account?"
            <Link to="/Home">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  </div>
</div>

);

};

export default Login;
