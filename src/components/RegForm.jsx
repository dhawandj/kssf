import React from "react";

export function SignUpForm({ callback }) {
  return (
    <div className="container1 modal">
      <div className="form-box animate ">
        <span
          onClick={() => callback(false)}
          className="close"
          title="Close Modal"
        >
          <i className="fa-solid fa-xmark fa-bounce"></i>
        </span>
        <h1>Sign-up</h1>
        <form>
          <div className="input-group">
            <div className="input-field">
              <i className="fa-solid fa-user"></i>
              <input type="text" placeholder="username" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-envelope"></i>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <i className="fa-solid fa-lock"></i>
              <input type="password" placeholder="Password" />
            </div>
            <p>
              Lost password <a href="">Click Her !</a>
            </p>
          </div>
          <div className="form-btn-feild">
            <button type="button">Sign up</button>
            <button type="button">Sign in</button>
          </div>
        </form>
      </div>
    </div>
  );
}
