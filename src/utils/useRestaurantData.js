import { useState, useEffect } from "react";
import { HOME_API } from "./constants";
const useRestaurantData = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await fetch(HOME_API);
    const json = await data.json();
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(resData);
  };
  return RestaurantList;
};
export default useRestaurantData;
