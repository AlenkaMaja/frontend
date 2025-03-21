import React, { useState } from "react";

const SignUp = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setModalOpen(true)}>Sign Up</button>

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
    </>
  );
};

export default SignUp;