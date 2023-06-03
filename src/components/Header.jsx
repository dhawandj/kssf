import React from "react";

export default function Header() {
  return (
    // <div className="header">
    //   <div className="header-sub">
    //     <h1> KSSF SAMAYA SANJEEVINI FOUNDATION</h1>
    <div className="header11">
      <div className="container11">
        <div className="headnavbar11">
          {/* <img
                src="src/assets/imgs/sqlogo.PNG"
                className="logo"
                alt="kssf logo"
                height="200px"
                width="220px"
                

              /> */}
          <h2>
            <b
              style={{
                backgroundColor: "black",
                color: "white",
                borderRadius: "5px",
                textAlign: "center",
                padding: "5px",
              }}
            >
              {" "}
              KSSF{" "}
            </b>{" "}
            
            SAMAYA SANJEEVINI FOUNDATION
          </h2>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Region</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row1">
          <div className="col1">
            <h1>KSSF</h1>
            <p className="wordsmr">
              <b> SAMAYA SANJEEVINI FOUNDATION</b>
            </p>
            <button type="button" className="expButton">
              Explore
            </button>
          </div>
          <div className="col1">
            <div className="card card1">
              {" "}
              <span>
                <i
                  style={{ color: "red" }}
                  class="fa-solid fa-hand-holding-droplet fa-fade fa-xl"
                ></i>{" "}
              </span>
              <h5>Donate Blood</h5>
              <p style={{ fontSize: "10px" }}>
                <b> One bag of blood can bring back one from the dead.</b>
              </p>
            </div>

            <div className="card card2">
              {" "}
              <span>
                <i
                  style={{ color: "green" }}
                  class="fa-solid fa-bowl-rice fa-flip fa-xl"
                ></i>{" "}
              </span>
              <h5>Donate Food</h5>
              <p style={{ fontSize: "10px" }}>
                <b> Can you imagine a world without hunger?</b>
              </p>
            </div>
            <div className="card card3">
              {" "}
              <span>
                <i
                  style={{ color: "blue" }}
                  class="fa-solid fa-handshake-angle fa-shake fa-xl"
                ></i>{" "}
              </span>
              <h5>My Thanks</h5>
              <p style={{ fontSize: "10px" }}>
                <b>
                  “Thank you for being the reason of many smiles and many Lifes{" "}
                </b>
              </p>
            </div>
            <div className="card card4">
              {" "}
              <span>
                <i
                  style={{ color: "yellow" }}
                  class="fa-solid fa-hand-fist fa-beat fa-xl"
                ></i>{" "}
              </span>
              <h5>Your Support</h5>
              <p style={{ fontSize: "10px" }}>
                <b> Alone we can do so little together we can do so much </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    //   </div>

    //   <h3 id="q1">
    //     Give a Blood once in a lifetime <br /> That can save a life!!!.
    //   </h3>
    // </div>
  );
}
