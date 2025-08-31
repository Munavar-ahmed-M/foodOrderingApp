import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockData";
import { useEffect, useState } from "react";
import { HOME_API } from "../utils/constants";
import { Link } from "react-router";
import RestaurantCardShimmer from "../shimmerUI/RestaurantCardShimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurantData from "../utils/useRestaurantData";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [toogleRestaurant, setToogleRestaurant] = useState(false);
  const onlineStatus = useOnlineStatus();
  const restaurantData = useRestaurantData();
  console.log(restaurantData);
  console.log(RestaurantList);
  useEffect(() => {
    setTimeout(() => {
      setRestaurantList(restaurant);
      setFilteredRestaurantList(restaurant);
    }, 1000);
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
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          placeholder="search your favorite foods"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        ></input>
        <button className="btn" onClick={handleFilter}>
          Search
        </button>
        <button className="btn" onClick={filterRating}>
          {toogleRestaurant ? "See All Restaurant" : "Top Rated Restaurant"}
        </button>
      </div>

      <div className="card-container">
        {filteredRestaurantList.length == 0
          ? array.map((el, index) => <RestaurantCardShimmer key={index} />)
          : filteredRestaurantList.map((res) => {
              return (
                <Link
                  key={res.info.id}
                  to={"/restaurant/" + res.info.id}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <RestaurantCard resData={res} key={res.info.id} />
                </Link>
              );
            })}
      </div>
    </div>
  );
};

export default Body;
