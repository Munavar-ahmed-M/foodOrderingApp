import { useEffect, useState } from "react";
import { MENU_API, MENU_ITEMS_IMGAGE } from "../utils/constants";
import { useParams } from "react-router";
import ShimmerMenu from "../shimmerUI/ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const ResMenu = () => {
  const resId = useParams();
  const { resInfo, recommandList } = useRestaurantMenu(resId.id);
  console.log(resInfo, recommandList);

  const [expanded, setExpanded] = useState({}); // 👈 track expanded items
  if (!recommandList || !resInfo) {
    return <ShimmerMenu />;
  }

  const { name, cuisines, avgRatingString } = resInfo;

  return (
    <>
      <h2 className="restaurant-name">{name}</h2>
      <h5 className="cousines">{cuisines?.join(",")}</h5>
      <h5 className="rating">{avgRatingString}</h5>

      <ul>
        {recommandList.map((el) => {
          const {
            name,
            price,
            defaultPrice,
            id,
            description,
            ratings,
            imageId,
          } = el?.card?.info;

          const isExpanded = expanded[id]; // 👈 check if expanded

          return (
            <li key={id}>
              <div className="dish-left-section">
                <div className="dish-name">{name}</div>
                <div className="dish-price">
                  ₹{(price || defaultPrice) / 100}
                </div>
                <span className="rating">
                  {ratings?.aggregatedRating?.rating
                    ? ratings.aggregatedRating.rating +
                      "(" +
                      ratings.aggregatedRating.ratingCountV2 +
                      ")"
                    : ""}
                </span>
                <div className="description">
                  {description &&
                    (isExpanded ? description : description.substring(0, 140))}
                  {description && description.length > 140 && (
                    <span
                      style={{
                        color: "#d63031",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                      onClick={() =>
                        setExpanded((prev) => ({
                          ...prev,
                          [id]: !isExpanded, // toggle this dish
                        }))
                      }
                    >
                      <br></br>
                      {isExpanded ? "  show less" : "  show more"}
                    </span>
                  )}
                </div>
              </div>

              <div className="dish-right-section">
                <div className="dish-image">
                  <img src={MENU_ITEMS_IMGAGE + imageId} alt={name} />
                  <button className="button">Add</button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ResMenu;
