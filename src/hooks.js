import { useState } from "react"



const food = [
    
    {
        id: 1,
        price: 3.99,
        quantity: 1,
        priceWithCurrncy: "£3.99",
        title: "Mini Luxury Turkey breast with Curry and Rice",
        src: "https://www.oakhousefoods.co.uk/media/catalog/product/cache/35dd47a9fd52ad85545efd044be8ecf7/1/0/1033_miniluxturkcurry_50.jpg"
    },
    {
        id: 2,
        price: 2.99,
        quantity: 1,
        priceWithCurrncy: "£2.99",
        title: "Baked Raspberry Cheesecake Twin Pack",
        src: "https://www.oakhousefoods.co.uk/media/catalog/product/cache/35dd47a9fd52ad85545efd044be8ecf7/2/0/2017_raspchecake_50.jpg"
    },
    {
        id: 3,
        price: 2.95,
        quantity: 1,
        priceWithCurrncy: "£2.95",
        title: "Chicken Breast, Stilton and Madeira Sauce",
        src: "https://www.oakhousefoods.co.uk/media/catalog/product/cache/35dd47a9fd52ad85545efd044be8ecf7/1/3/1359_chickmadeira_50.jpg"
    },
]

export const useHooks = () => {
    const [bag, setBag] = useState([]);
    const [foods, setFoods] = useState(food);
    const [showModal, setShowModal] = useState(false);
    const [status, setStatus] = useState("summary");
    const [userDetails, setUserDetails] = useState({});

    const handleUserChange = (event) => {
        setUserDetails({ ...userDetails, [event.target.name]: [event.target.value] })
    }

    const handleNext = (newStatus) => {
        setStatus(newStatus)
        if (newStatus === "end") {
            setBag([])
        }
    }

    const handleAddToBag = (card) => {
        console.log("handleAddToBag called", card);
        setBag([...bag, card])
    }

    const handleEmptyBag = (card) => {
        setBag([])
    }

    const handleCheckout = () => {
        setShowModal(true)
        console.log("handleCheckout called");
    }

    const handleCancel = () => {
        setFoods(food)
        setShowModal(false)
    }

    const handleQuantity = (event, id) => {
        const updatedFoods = foods.map((meal) => {
            if (meal.id === id) {
                return { ...meal, quantity: event.target.value }
            }
            return meal;
        })
        setFoods(updatedFoods)
    }

    return { bag, foods, status, userDetails, handleNext, handleCancel, showModal, handleUserChange, setShowModal, handleQuantity, handleAddToBag, handleEmptyBag, handleCheckout }
}