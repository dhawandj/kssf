import React, { useState } from "react";
import { SignUpForm } from "./RegForm";
import { auth } from "../config/firebase";

export default function Navbar() {
  const [showComponent, setShowComponent] = useState(false);
  return (
    <div className="navbar">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
      <a onClick={() => setShowComponent(true)}>Login</a>
      {showComponent && <SignUpForm callback={setShowComponent} />}
      <a href="#C4" className="right">
           {auth.currentUser !==null ?auth.currentUser.displayName:"not yet logined"}
           
      </a>
      
    </div>
    
  );
}
