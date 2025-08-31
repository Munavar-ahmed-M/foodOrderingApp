import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <div className="logo">Odoms.</div>
      </div>
      <div className="nav-container">
        <div className="nav-container">
          <div
            style={{
              textDecoration: "none",
              color: "white",
              marginTop: "1.3em",
            }}
          >
            Online : {onlineStatus ? "✅" : "❎"}
          </div>
          <Link
            to={"/"}
            style={{ textDecoration: "none", color: "white" }}
            className="nav-items"
          >
            Home
          </Link>
          <Link
            to={"contact"}
            style={{ textDecoration: "none", color: "white" }}
            className="nav-items"
          >
            ContactUs
          </Link>
          <Link
            to={"aboutUs"}
            style={{ textDecoration: "none", color: "white" }}
            className="nav-items"
          >
            About Us
          </Link>
          <Link
            to={"grocery"}
            style={{ textDecoration: "none", color: "white" }}
            className="nav-items"
          >
            Grocery
          </Link>
          <Link
            to={"cart"}
            style={{ textDecoration: "none", color: "white" }}
            className="nav-items"
          >
            Cart
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
