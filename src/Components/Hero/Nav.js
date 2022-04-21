import React from "react";
import "./mystyle.css";
const Nav = () => {
  return (
    <div>
      <section className="hero">
        <div className="intro" id="int">
          <div className="header width">
            <div className="logo">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/1/12/Swiggy_logo.svg/1200px-Swiggy_logo.svg.png"
                alt="Logo"
                width="200px"
              />
            </div>
            <div className="btnContainer">
              <a href="#" className="LogInBtn">
                Login
              </a>
              <a href="#" className="SignUpBtn">
                Sign Up
              </a>
            </div>
          </div>
          <div className="contain width">
            <div id="containers">
              <div id="flip">
                <div>
                  <div>Hungry?</div>
                </div>
                <div>
                  <div>Unexpected Guest?</div>
                </div>
                <div>
                  <div>Cooking gone wrong?</div>
                </div>
                <div>
                  <div>Movie marathon?</div>
                </div>
                <div>
                  <div>Game night?</div>
                </div>
                <div>
                  <div>Late night at office?</div>
                </div>
              </div>
            </div>
            <p id="ankit">Order food from favourite restaurants near you.</p>
          </div>
          <div className="input-container width">
            <input type="text" placeholder="Enter your delivery location" />
            <button type="submit" className="locateBtn">
              <i className="fa fa-crosshairs"></i>Locate Me
            </button>
            <button type="submit" className="foodBtn">
              FIND FOOD
            </button>
          </div>
          <div className="cities width">
            <p id="ankit">POPULAR CITIES IN INDIA</p>
            <ul className="city-names">
              <li className="alternate">Ahemdabad</li>
              <li>Bangalore</li>
              <li className="alternate">Chennai</li>
              <li>Delhi</li>
              <li className="alternate">Gurgaon</li>
              <li>Hyderabad</li>
              <li className="alternate">Kolkata</li>
              <li>Mumbai</li>
              <li className="alternate">Pune</li>
              <li>& more</li>
            </ul>
          </div>
        </div>
        <div className="img" id="hide"></div>
      </section>
    </div>
  );
};

export default Nav;