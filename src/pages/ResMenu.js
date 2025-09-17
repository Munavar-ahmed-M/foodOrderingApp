import { useState } from "react";
import { MENU_ITEMS_IMGAGE } from "../utils/constants";
import { useParams } from "react-router";
import ShimmerMenu from "../shimmerUI/ShimmerMenu";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "../components/RestaurantCategory";

const ResMenu = () => {
  const resId = useParams();
  const { resInfo, Cards } = useRestaurantMenu(resId.id);
  const [showItems, setShowItems] = useState(0);
  const [expanded, setExpanded] = useState({}); // 👈 track expanded items
  const Categories =
    Cards != null
      ? Cards.filter(
          (c) =>
            c?.card?.card?.["@type"] ===
            "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        )
      : undefined;
  console.log(Categories);

  if (!Categories || !resInfo) {
    return <ShimmerMenu />;
  }
  const { name, cuisines, avgRatingString } = resInfo;
  return (
    <>
      <h2 className="text-center my-2 text-2xl font-bold">{name}</h2>
      <h5 className="text-center text-lg">{cuisines?.join(",")}</h5>
      <h5 className="text-center">⭐{avgRatingString}</h5>
      {/*Categories of the Restaurant------------------------ */}
      <div className="text-center">
        {Categories.map((category, index) => {
          return (
            <>
              <RestaurantCategory
                key={index}
                items={category?.card?.card?.itemCards}
                title={category?.card?.card?.title}
                showItems={index === showItems}
                setShowItems={() =>
                  showItems != index ? setShowItems(index) : setShowItems(null)
                }
              />
            </>
          );
        })}
      </div>
    </>
  );
};

export default ResMenu;
