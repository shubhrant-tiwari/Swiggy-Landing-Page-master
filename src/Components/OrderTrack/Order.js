import React from "react";
import "./msystyle2.css";

const Order = () => {
  return (
    <div>
      <section className="features">
        <div className="container">
          <div className="feature">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              alt=""
            />
            <h2>No Minimum Order</h2>
            <p>
              Order in for yourself or for the group,
              <br />
              with no restrictions on order value
            </p>
          </div>
          <div className="feature">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              alt=""
            />
            <h2>Live Order Tracking</h2>
            <p>
              Know where your order is at all times,
              <br />
              from the restaurant to your doorstep
            </p>
          </div>
          <div className="feature">
            <img
              src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              alt=""
            />
            <h2>Lightning-Fast Delivery</h2>
            <p>
              Experience Swiggy's superfast delivery
              <br />
              for food delivered fresh & on time
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Order;