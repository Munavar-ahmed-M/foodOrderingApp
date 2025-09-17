import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const links = [
    { route: "", value: "Home" },
    { route: "contact", value: "Contact" },
    { route: "aboutUs", value: "About Us" },
    { route: "grocery", value: "Grocery" },
    { route: "cart", value: "Cart" },
  ];
  return (
    <div className="flex justify-between items-center bg-red-500">
      <div className="logo-container">
        <div className="text-white text-3xl font-bold px-4">Odoms.</div>
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
        <div>{loggedInUser}</div>
      </div>
    </div>
  );
};
export default Header;
