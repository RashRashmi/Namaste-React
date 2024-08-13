import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaraunrantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestrauntMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  const categories =
    resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="m-5 p-5 font-extrabold text-2xl">{name}</h1>
      <p className="m-1 p-1  font-bold text-xl">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {/* categories accodian */}
      {categories.map((catergory, index) => (
        // controlled component
        <RestaurantCategory
          key={catergory?.card?.card?.title}
          data={catergory?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => {
            //lifting a state up to control the child component
            setShowIndex(index === showIndex ? null : index);
          }}
        />
      ))}
    </div>
  ); 
};

export default RestaurantMenu;
