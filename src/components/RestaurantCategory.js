import RestaurantList from "./RestaurantList";
import { useState } from "react";
const RestaurantCategory = ({ items, title, showItems, setShowItems }) => {
  const handleClick = () => {
    setShowItems();
  };
  return (
    <>
      <div className="flex justify-center my-2 ">
        <div
          className=" p-4 w-7/12 my-1 bg-gray-50  shadow-xl rounded-sm flex justify-between flex-col cursor-pointer"
          onClick={handleClick}
        >
          <div className="flex justify-between">
            <span className="font-bold text-lg">
              {title} ({items.length})
            </span>
            <span className="text-2xl">⬇️</span>
          </div>
          {/**Body of Accordian */}
          {showItems && <RestaurantList items={items} />}
        </div>
      </div>
    </>
  );
};
export default RestaurantCategory;
