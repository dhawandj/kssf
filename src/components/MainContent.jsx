import React from "react";
import CardBox from "./CardComp";
import ImageSlider from "./ImgSlider";
import CardSlider from "./SlideShow";
import ProtrateSlider from "./Protrate";

export default function MainContent() {
  const images = [
    "src/assets/imgs/award.jpeg",
    "https://images.unsplash.com/photo-1585468274952-66591eb14165?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
    "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1607490703747-0519d2e398a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1512614521719-2806f69d406b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
  ];
  return (
    <div className="main">
      <h2>Our Foundation Members</h2>
      <h5> </h5>

      <div className="mainImg1" style={{ height: "400px" }}>
        <ImageSlider time={3000} images={images} />
      </div>

      <CardBox>
        <h1>KSSF Our Aim</h1>
        <p>
          Our foundation, established with a vision for positive change, is
          committed to making a lasting impact on society. Guided by a deep
          sense of compassion and a firm belief in the power of collective
          action, we strive to address the most pressing challenges of our time.
          Through strategic initiatives and collaborations with diverse
          partners, we seek to empower individuals, communities, and
          organizations to unlock their full potential. Our foundation is
          dedicated to promoting education, advancing healthcare, fostering
          innovation, and championing social justice. By leveraging resources,
          expertise, and innovation, we aim to create a world where every
          individual has equal opportunities to thrive and contribute to a
          better future for all.
        </p>
      </CardBox>

      <p></p>
      <br />
      <h2 id="C2">"The Life-Giving Act: Donate Blood and Be a Hero!"</h2>
      <CardBox />
      <div
        className="bloodCard card"
        style={{
          height: "450px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <i
          style={{ color: "red" }}
          className="fa-solid fa-hand-holding-droplet  fa-2xl"
        ></i>
        <div className="flex-container-bloodcard">
          <div id="bloodcard-title">
            {" "}
            <h3>
              "Donating blood is a simple act of kindness that can save lives."
            </h3>
            <h5>
              <i className="fa-solid fa-bottle-droplet"></i>{" "}
              <span style={{ color: "white" }}>
                {" "}
                :: Click to Need the blood
              </span>
            </h5>
            <h5>
              <i className="fa-solid fa-droplet"></i>{" "}
              <span style={{ color: "white" }}>
                {" "}
                :: Click to Donate the blood
              </span>
            </h5>
          </div>
          <div id="bloodcard-imgs">
            {/* <h5>Our heros</h5> */}

            <ProtrateSlider images={images} time={3000} />

            <h3>☞ Our Blood Doners </h3>
          </div>
        </div>
        <div className="bloodcard-btn">
          <button onClick={() => alert("it works")}>
            {" "}
            <i className="fa-solid fa-bottle-droplet"></i> Requirment{" "}
          </button>

          <button onClick={() => alert("it works")}>
            Donate <i className="fa-solid fa-fade fa-droplet"></i>
          </button>
        </div>
      </div>

      <br />
      <h2 id="C4"> Nourishing Hearts: Donate Food and Feed the Soul!</h2>
      <h5>Title description, Sep 2, 2017</h5>
      <div
        className="bloodCard card"
        style={{
          height: "450px",
          width: "100%",
          backgroundColor: "black",
          color: "white",
        }}
      >
        <i
          style={{ color: "green", marginTop: "20px" }}
          className="fa-solid fa-bowl-rice  fa-2xl"
        ></i>
        <div className="flex-container-bloodcard" >
          <div id="foodcard-title">
            {" "}
            <h3 style={{color:"green"}}>
            "The hunger for love is much more difficult to remove than the hunger for bread." <br /> - Mother Teresa
            </h3>
            <h5>
              <i className="fa-solid fa-bottle-droplet"></i>{" "}
              <span style={{ color: "white" }}>
                {" "}
                :: Click to Need the Food
              </span>
            </h5>
            <h5>
              <i className="fa-solid fa-bowl-food"></i>{" "}
              <span style={{ color: "white" }}>
                {" "}
                :: Click to Donate the Food
              </span>
            </h5>
          </div>
          <div id="foodcard-imgs">
            {/* <h5>Our heros</h5> */}

            <ProtrateSlider images={images} time={3000} />

            <h4>☞ Our Food Doners </h4>
          </div>
        </div>
        <div className="foodcard-btn">
          <button onClick={() => alert("it works")}>
            {" "}
            <i className="fa-solid fa-bottle-droplet"></i> Requirment{" "}
          </button>

          <button onClick={() => alert("it works")}>
            Donate <i className="fa-solid fa-fade fa-bowl-food"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
