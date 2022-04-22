import React from 'react'

const Card = ({ card, shoppingBag, handleAddToBag, handleQuantity }) => (
    <div className="card" key={card.id}>
        <img src={card.src} alt="" />
        <div className="content">
            <h2>{card.title}</h2>
            <p>Qty <input onChange={(e) => handleQuantity(e, card.id)} type="text" value={card.quantity} /> x {card.priceWithCurrncy}</p>
            {!shoppingBag && <button onClick={() => handleAddToBag(card)}>Add to Bag</button>}
        </div>
    </div>
)

export default Card
