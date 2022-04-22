import React from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card";
import CheckoutModal from "../../components/CheckoutModal";
import "./style.css";

const ShoppingCard = ({ bag, status, handleUserChange, userDetails, handleCancel, handleNext, showModal, handleEmptyBag, handleCheckout }) => {
  return (
    <div className="container">
      <CheckoutModal bag={bag} status={status} userDetails={userDetails} handleNext={handleNext} handleCancel={handleCancel} showModal={showModal} handleUserChange={handleUserChange} />
      {bag.length ? (
        <div className="wrapper">
          <div className="cards-wrapper">
            {bag.map((card) => <Card shoppingBag card={card} />)}
          </div>
          <button onClick={handleCheckout}>Check out</button>
          <button onClick={handleEmptyBag}>Empty bag</button>
        </div>
      ) : <div className="empty-bag">
        <p>Bag is empty go to <strong>Home page</strong> and add new food.</p>
        <Link to="/">Go to Home page</Link>
      </div>}
    </div>
  );
}

export default ShoppingCard;