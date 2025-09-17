import { useEffect, useState } from "react";
import { MENU_API } from "./constants";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [Cards, setCards] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const value = await fetch(MENU_API + resId);
    const json = await value.json();
    const cards =
      json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    const resdata = json?.data?.cards[2]?.card?.card?.info;
    console.log("cards", cards, " json ", json);

    setResInfo(resdata);
    setCards(cards);
  };
  return { resInfo, Cards };
};
export default useRestaurantMenu;
