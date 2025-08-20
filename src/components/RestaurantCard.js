import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resData.info;
<<<<<<< HEAD

=======
>>>>>>> cdae8e4 (search items and restaurants-product with shimmer effect)
  return (
    <div className="res-card">
      <div className="cardimage-container">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="res-logo"
          className="res-logo"
        ></img>
      </div>
<<<<<<< HEAD
      <h4 className="title">{name} </h4>
      <p className="cousines">{cuisines.join(",")}</p>
=======
      <h4 className="title">
        {name.length > 12 ? name.substring(0, 12) + "..." : name}{" "}
      </h4>
      <p className="cousines" style={{ textAlign: "left" }}>
        {cuisines.length > 2
          ? cuisines.join(",").substring(0, 12) + "..."
          : cuisines.join(",")}
      </p>
>>>>>>> cdae8e4 (search items and restaurants-product with shimmer effect)
      <div className="rating-time">
        <span>Rating:{avgRating} </span>
        <span>{sla.slaString}</span>
      </div>
      <div className="price">{costForTwo}</div>
    </div>
  );
};
export default RestaurantCard;
