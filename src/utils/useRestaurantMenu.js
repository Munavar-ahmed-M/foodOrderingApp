import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [recommandList, setRecommandList] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const value = await fetch(MENU_API + resId);
    const json = await value.json();
    const recommanded =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards;
    const resdata = json?.data?.cards[2]?.card?.card?.info;
    setResInfo(resdata);
    setRecommandList(recommanded);
  };
  return { resInfo, recommandList };
};
export default useRestaurantMenu;
