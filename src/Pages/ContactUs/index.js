import React from "react";
import "./style.css";

const ContactUs = () => (
  <div className="contact">
  <div className="container">
    <h2>Contact Us</h2>
    <form>
      <input type="text" placeholder="Enter your first name" />
      <input type="email" placeholder="Enter your email" />
      <input type="text" placeholder="Enter your mobile number" />
      <textarea placeholder="Enter your message here"/>
      <button>Submit</button>
    </form>
    <div className="map-wrapper">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2237.2298054497373!2d-4.334507783949423!3d55.893373688608776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845855f98024b%3A0x3c2fd06ef87082f2!2sGreat%20Western%20Rd%2C%20Glasgow%20G13%202TN!5e0!3m2!1sen!2suk!4v1650563500608!5m2!1sen!2suk" width="600" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  </div>
)

export default ContactUs;