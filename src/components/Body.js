import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantList, setFilteredResturantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.941382793635087&lng=77.58590016514063&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setListOfRestaurants(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredResturantList(
      jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onClickFilter = () => {
    const filteredList = listofRestaurants.filter(
      (res) => res.info.avgRating > 4.2
    );
    setListOfRestaurants(filteredList);
  };

  const onSearch = () => {
    //filter the restaurant card and filter the ui
    const felteredList = listofRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturantList(felteredList);
  };

  const onSearchType = (e) => {
    setSearchText(e.target.value);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>Looks like your offline!! Please check your internet Connection</h1>
    );

  return listofRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className=" flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={onSearchType}
          />
          <button className="px-4 py-1 bg-green-100 m-4" onClick={onSearch}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4">
          {" "}
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            type="submit"
            onClick={onClickFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurantList?.map((Restaurant) => (
          <Link to={"/restaurants/" + Restaurant?.info?.id}>
            <RestaurantCard key={Restaurant?.info?.id} resData={Restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
