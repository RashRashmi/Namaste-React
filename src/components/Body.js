import { useState } from "react";
import resList from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(resList);

  const onClickFilter = () => {
    const filteredList = listofRestaurants.filter((res) => res.info.avgRating > 4.5);
    setListOfRestaurants(filteredList)
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" type="submit" onClick={onClickFilter}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {listofRestaurants.map((Restaurant) => (
          <RestaurantCard key={Restaurant?.info?.id} resData={Restaurant} />
        ))}
      </div>
    </div>
  ); 
};

export default Body;
