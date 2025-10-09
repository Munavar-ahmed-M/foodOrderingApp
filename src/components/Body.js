import RestaurantCard, { withLabel } from "./RestaurantCard";
import restaurant from "../utils/mockData";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCardShimmer from "../shimmerUI/RestaurantCardShimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [toogleRestaurant, setToogleRestaurant] = useState(false);
  const onlineStatus = useOnlineStatus();
  const restaurantData = onlineStatus ? useRestaurantData() : null;
  const VegRestaurant = withLabel(RestaurantCard);
  useEffect(() => {
    setRestaurantList(restaurant);
    setFilteredRestaurantList(restaurant);
  }, []);
  const filterRating = () => {
    const filter = RestaurantList.filter((data) => {
      return data.info.avgRating > 4.5;
    });
    setFilteredRestaurantList(filter);
    if (!toogleRestaurant) {
      setToogleRestaurant(true);
    } else if (toogleRestaurant) {
      setFilteredRestaurantList(RestaurantList);
      setToogleRestaurant(false);
    }
  };
  const handleFilter = () => {
    const value = searchValue.trim();
    if (value.length > 0) {
      const filteredData = RestaurantList.filter((data) => {
        return data.info.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredRestaurantList(filteredData);
    } else {
      setFilteredRestaurantList(RestaurantList);
    }
  };
  const array = new Array(20).fill(0, 0, 20);

  if (onlineStatus === false) {
    return <h1>Please Check your Internet Connection...</h1>;
  }
  return (
    <div className="px-26 pb-7">
      <div className="px-1 mt-4 mb-4">
        <input
          type="text"
          data-testid="searchInput"
          placeholder="search your favorite foods"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          className="border-gray-400 border-2 px-2.5 py-2  text-md rounded-sm w-[13em] outline-0"
        ></input>
        <button
          className="bg-red-500 p-3 text-white rounded-md w-20 text-sm ml-2"
          onClick={handleFilter}
        >
          Search
        </button>
        <button
          className="bg-red-500 p-3 text-white rounded-md w-auto text-sm ml-2 cursor-pointer"
          onClick={filterRating}
        >
          {toogleRestaurant ? "See All Restaurant" : "Top Rated Restaurant"}
        </button>
      </div>

      <div className="xl:grid xl:grid-cols-5 xl:gap-8 lg:flex lg:flex-wrap md:flex md:flex-row md:flex-wrap md:gap-4 sm:flex sm:flex-wrap sm:flex-col xs:gap-4">
        {filteredRestaurantList.length == 0
          ? array.map((el, index) => <RestaurantCardShimmer key={index} />)
          : filteredRestaurantList.map((res) => {
              return (
                <Link
                  key={res.info.id}
                  
                  to={"/restaurant/" + res.info.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  {res.info?.veg ? (
                    <VegRestaurant resData={res} key={res.info.id} />
                  ) : (
                    <RestaurantCard resData={res} key={res.info.id} />
                  )}
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
