import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const cartIcon = new URL("../assets/cart.svg",import.meta.url); //import.meta.url
  const logo = new URL("../assets/logo.svg",import.meta.url);
 
  //Subscribing to the store (cartItems)
  const cartItems = useSelector((store) => store.cart.items.length);
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const [login, setLogin] = useState(true);
  const links = [
    { route: "", value: "Home" },
    { route: "contact", value: "Contact" },
    { route: "aboutUs", value: "About Us" },
    { route: "grocery", value: "Grocery" },
    {
      route: "cart",
      value: (
        <>
          <span className="flex gap-2">
            <img src={cartIcon}></img> ({cartItems})
          </span>
        </>
      ),
    },
  ];
  return (
    <div className="flex justify-between items-center bg-red-500">
      <div className="logo-container">
        <div className="text-white text-3xl font-bold px-4">
          <img src={logo}></img>
        </div>
      </div>
      <div className="flex  mr-4">
        <div className="p-4 text-white">
          Online : {onlineStatus ? "✅" : "❎"}
        </div>
        {links.map((item, ind) => {
          return (
            <Link
              key={ind}
              to={item.route}
              className="p-4 text-white hover:bg-[#fc5961]"
            >
              {item.value}
            </Link>
          );
        })}
        <div className="p-4 font-bold text-white">{loggedInUser}</div>
        <button
          className="p-4 font-bold text-white cursor-pointer"
          onClick={() => setLogin(!login)}
        >
          {login ? "Login" : "Logout"}
        </button>
      </div>
    </div>
  );
};
export default Header;
