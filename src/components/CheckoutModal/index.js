import React from 'react'
import { Link } from 'react-router-dom';
import "./style.css";

const CheckoutModal = ({ bag, status, handleNext, userDetails, showModal, handleCancel, handleUserChange }) => {
    console.log({ bag });
    const totalPrice = bag.reduce((acc, meal) => {
        return acc + (meal.quantity * meal.price)
    }, 0)

    return showModal && (
        <div className='modal-wrapper'>
            <div className='modal'>
                {status === "summary" && <>
                    <h2>Checkout Summary</h2>
                    {bag.map(meal => <div>
                        <h3>Name: {meal.title}</h3>
                        <h3>Quantity: {meal.quantity}</h3>
                        <h3>Price: £{Math.round((meal.price * meal.quantity) * 100) / 100}</h3>
                    </div>)}
                    <h3>Total Price: £{Math.round(totalPrice * 100) / 100}</h3>
                    <button onClick={() => handleNext("details")}>Next</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>}

                {status === "details" && <>
                    <h2>User Details</h2>
                    <input onChange={handleUserChange} value={userDetails.name} name="name" type="text" placeholder='Enter your full name' />
                    <input onChange={handleUserChange} value={userDetails.address} name="address" type="text" placeholder='Enter your address' />
                    <input onChange={handleUserChange} value={userDetails.phoneNumber} name="phoneNumber" type="number" placeholder='Enter phone number' />
                    <button onClick={() => {
                        handleNext("end")
                    }}>Next</button>
                    <button onClick={handleCancel}>Cancel</button>
                </>}

                {status === "end" && <>
                    <h2>{userDetails.name} thanks for ordering!</h2>
                    <p>Your food will be delivered to <strong>{userDetails.address}</strong> within next 40 minutes</p>
                    <Link onClick={handleCancel} to="/">Continue shopping</Link>
                </>}
            </div>
        </div>
    )
}

export default CheckoutModal