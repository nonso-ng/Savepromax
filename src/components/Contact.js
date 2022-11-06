import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>ContactUs</title>
        <meta name="description" content="You can reach out to us here" />
        <link rel="canonical" href="/contact" />
      </Helmet>

      <div>
        <section id="contact">
          <div className="contact-layout">
            <div className="contact-content">
              <h1>Contact US</h1>
              <form>
                <input
                  type="text"
                  placeholder="Enter Name"
                  name="name"
                  required
                ></input>
                <input
                  type="email"
                  placeholder="Enter mail"
                  name="email"
                  required
                ></input>
                <textarea placeholder="Write Message"></textarea>

                <button className="btn">Submit</button>
              </form>
            </div>
            <div className="contact-img"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
