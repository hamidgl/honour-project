import { Routes, Route, BrowserRouter as Router, } from "react-router-dom";
import ContactUs from './Pages/ContactUs';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import ShoppingCard from './Pages/ShoppingCard';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Login from "./Pages/Login";
import { useHooks } from "./hooks";

const App = () => {
  const { bag, foods, status, handleNext, showModal, handleCancel, userDetails, handleUserChange, handleQuantity, handleAddToBag, handleEmptyBag, handleCheckout } = useHooks()
  return (
    <Router>
      <div>
        <NavBar bagLength={bag.length} />
        <Routes>
          <Route path="/" element={<Home foods={foods} handleAddToBag={handleAddToBag} handleQuantity={handleQuantity} />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
          <Route path="/ShoppingBag" element={<ShoppingCard
            bag={bag} showModal={showModal} handleCheckout={handleCheckout} handleEmptyBag={handleEmptyBag}
            status={status} handleNext={handleNext}
            handleCancel={handleCancel}
            handleUserChange={handleUserChange}
            userDetails={userDetails}
          />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
