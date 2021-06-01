import React, { Component } from "react";
import SingleService from "./SingleService";

const services = [
  { title: "Naručivanje naših farbi", icon: "fa-shopping-cart" },
  { title: "Online saveti", icon: "fa-laptop" },
  { title: "Privatnost", icon: "fa-lock" },
];

class Services extends Component {
  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Servisi</h2>
              <h3 className="section-subheading text-muted">
                Osim frizura nudimo i druge pogodnosti
              </h3>
            </div>
          </div>
          <div className="row text-center">
            {services.map((service, index) => {
              return <SingleService {...service} key={index} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
