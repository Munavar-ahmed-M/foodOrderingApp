import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockData";
import { useEffect, useState } from "react";
import { HOME_API } from "../utils/constants";
import { Link } from "react-router";
import RestaurantCardShimmer from "../shimmerUI/RestaurantCardShimmer";
const Body = () => {
  const [RestaurantList, setRestaurantList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [gotTheData, setGotTheData] = useState(false);
  const [toogleRestaurant, setToogleRestaurant] = useState(false);
  console.log(RestaurantList);
  useEffect(() => {
    setTimeout(() => {
      setRestaurantList(restaurant);
      setFilteredRestaurantList(restaurant);
    }, 1000);
  }, []);
  useEffect(() => {
    fetchData();
  });
  const fetchData = async () => {
    const data = await fetch(HOME_API);
    const json = await data.json();
    const resData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(resData);
    setRestaurantList(resData);
    if (RestaurantList.length > 0) {
      setGotTheData(true);
    }
  };
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
