import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockData";
import { useState } from "react";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState(restaurant);
  const filterRating = () => {
    const filter = restaurant.filter((data) => {
      return data.info.avgRating > 4.5;
    });
    setRestaurantList(filter);
  };
  return (
    <div className="body">
      <button className="filter-btn" onClick={filterRating}>
        Top Rated Restaurant
      </button>
      <div className="card-container">
        {RestaurantList.map((res) => {
          return <RestaurantCard resData={res} key={res.info.id} />;
        })}
      </div>
    </div>
  );
};

export default Body;
