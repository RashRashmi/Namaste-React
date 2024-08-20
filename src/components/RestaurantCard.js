import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/userContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  const { loggedInUser } = useContext(UserContext);

  const styleCard = {
    backgroundColor: "#f0f0f0",
  };

  return (
    <div
      data-testid="resCard"
      className="m-4 p-4 w-[400px] h-50 bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="w-50 h-50 rounded-lg"
        alt="res-logo"
        src={`${CDN_URL}` + resData?.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.deliveryTime} Minites</h4>
      <h1>{loggedInUser}</h1>
    </div>
  );
};

//Higher order compoment

export const withVegPromoted = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black rounded-lg w-20 m-2 p-2">
          Good
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
