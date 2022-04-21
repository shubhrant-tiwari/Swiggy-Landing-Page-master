import React from "react";
import "./mystyle3.css";
const Mobile = () => {
  return (
    <div>
      <section className="preview">
        <div className="container">
          <div className="description">
            <h2>
              Restaurants <br />
              in your pocket
            </h2>
            <p>
              Order from your favorite restaurants & track <br />
              on the go, with the all-new Swiggy app.
            </p>
            <nav>
              <a href="">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
                  alt=""
                />
              </a>
              <a href="">
                <img
                  src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
                  alt=""
                />
              </a>
            </nav>
          </div>
          <div className="screenshots">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
              alt=""
            />
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mobile;