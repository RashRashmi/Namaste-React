import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  // Subscribing to the selector using a selector
  const cartItems = useSelector((store) => store.cart.items);

  const data = useContext(UserContext);

  const onLoginLogout = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="flex justify-between  bg-pink-50 shadow-lg sm:bg-yellow-100">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold">
            {" "}
            <Link to="/cart">Cart - ({cartItems.length} items)</Link>
          </li>

          <button className="login" onClick={onLoginLogout}>
            {btnName}
          </button>
          <li className="font-bold px-4">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
