import { MENU_ITEMS_IMGAGE } from "../utils/constants";
const RestaurantList = ({ items }) => {
  console.log(items);

  return (
    <>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex py-4  justify-between border-gray-200 border-b-2 items-center "
        >
          <div className="text-left w-9/12">
            <div className="font-bold text-gray-700">
              {item?.card?.info?.name}
            </div>
            <div className="text-red-600 text-sm">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </div>
            <p className="text-sm w-8/12 tracking-wide my-1">
              {item?.card?.info?.description}
            </p>
          </div>
          <div className="w-2/12 relative">
            <button className="bg-white p-2 font-bold shadow-lg  text-xs text-black rounded-md absolute bottom-[-12] right-1/3 cursor-pointer">
              Add +
            </button>
            <div className="h-25 rounded-3xl overflow-hidden  ">
              <img
                className="w-full object-cover"
                src={MENU_ITEMS_IMGAGE + item?.card?.info?.imageId}
              ></img>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default RestaurantList;
