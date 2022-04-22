import React from "react";
import "./style.css";

const AboutUs = () => {
  return (
    <div className="container">
      <h1>About use page</h1>
      <div className="image-wrapper">
        <img
          src="https://www.oakhousefoods.co.uk/media/catalog/product/cache/35dd47a9fd52ad85545efd044be8ecf7/1/0/1033_miniluxturkcurry_50.jpg"
          alt=""
        />
      </div>

      <h2>Our history</h2>
      <p>
      <h3>All of our dishes are chosen for their quality and taste and are flash-frozen 
      to lock in goodness and flavour. With a choice of over 350 frozen meals and desserts,
       there really is something for everyone, no matter your appetite, dietary needs or preferences.
        We even make sure the majority of our meals can be cooked in the microwave and oven, to create 
        easy mealtimes for you</h3>
      </p>
      <p>
      <h3> approach is to always go the extra mile; Oakhouse Foods offers a personal experience for your 
      home delivery service. You can expect a friendly local team, with the same regular delivery driver 
      visiting you, who can even help pack away your food. This is why thousands love to have an Oakhouse Foods meal day!</h3>
      </p>
    </div>
  );
};

export default AboutUs;
