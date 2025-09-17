import { CDN_LINK } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, cloudinaryImageId, avgRating, sla, costForTwo } =
    resData.info;
  return (
    <div className="w-[240px] p-3 rounded-[12px] bg-[#fff] shadow-[0px_2px_8px_rgba(0,0,0,0.1)] transition duration-200  ease-in-out  cursor-pointer  hover:scale-95 hover:shadow-[0px_6px_16px_rgba(0,0,0,0.15)]">
      <div className="w-full h-[150px] rounded-[10px] overflow-hidden  mb-[10px]">
        <img
          src={CDN_LINK + cloudinaryImageId}
          alt="res-logo"
          className="w-full h-full object-cover"
        ></img>
      </div>
      <h4 className="font-[500] text-[1.5em] my-[0.3em]">
        {name.length > 12 ? name.substring(0, 12) + "..." : name}{" "}
      </h4>
      <p
        className="text-[14px] text-[#666] mb-[8px] break-all text-center"
        style={{ textAlign: "left" }}
      >
        {cuisines.length > 2
          ? cuisines.join(",").substring(0, 12) + "..."
          : cuisines.join(",")}
      </p>
      <div className="flex  justify-between text-sm mb-1.5  select-none">
        <span>Rating:{avgRating} </span>
        <span>{sla.slaString}</span>
      </div>
      <div className="font-bold text-[15px] text-[#333]">{costForTwo}</div>
    </div>
  );
};

export const withLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute m-4 bottom-0 right-0 z-10">
          <div className=" border-green-600 border-2 w-fit p-1">
            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
          </div>
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
