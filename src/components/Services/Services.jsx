import React from "react";
import "./Services.css";
import arrow_icon from "../../assets/arrow_icon.png";
import services_data from "../../assets/servicesData";
const Services = () => {
  return (
    <div className="services">
      <div className="services-title">
        <h1>My Services</h1>
      </div>
      <div className="services-container">
        {services_data.map((service, index) => {
          return (
            <div key={index} className="services-format">
              <h3>
                {service.icon}
                {service.id}
              </h3>
              <h2>{service.title} </h2>
              <p> {service.description}</p>
              <div className="services-readmore">
                <p>Read More</p>
                <img src={arrow_icon} alt="arrow_icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
