import React from "react";
import CardBox from "./CardComp";
import ImageSlider, { images } from "./ImgSlider";


export default function SideContent() {
  return (
    <div className="side">
      <h2>About Me</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg" style={{ height: "600px" }}>
       
     <ImageSlider time={10000}  images={images}/>
    
      </div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
      <h3>More Text</h3>
      <p>Lorem ipsum dolor sit ame.</p>
      
      <div className="fakeimg" style={{ height: "60px" }}>
        Image
      </div>
      <br />
      <div className="fakeimg" style={{ height: "60px" }}>
        Image
      </div>
      <br />
      <div className="fakeimg" style={{ height: "60px" }}>
        Image
      </div>
    </div>
  );
}
