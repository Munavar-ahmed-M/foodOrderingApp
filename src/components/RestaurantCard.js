import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resData.info;

  return (
    <div className="res-card">
      <div className="cardimage-container">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="res-logo"
          className="res-logo"
        ></img>
      </div>
      <h4 className="title">{name} </h4>
      <p className="cousines">{cuisines.join(",")}</p>
      <div className="rating-time">
        <span>Rating:{avgRating} </span>
        <span>{sla.slaString}</span>
      </div>
      <div className="price">{costForTwo}</div>
    </div>
  );
};
export default RestaurantCard;
