import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {name,cuisines,avgRating,costForTwo,sla} = resData?.info;

    const styleCard = {
        backgroundColor: "#f0f0f0",
      };
      
  
    return (
      <div className="res-card" style={styleCard}>
        <img
          className="res-logo"
          alt="res-logo"
          src={
           `${CDN_URL}`  +
            resData?.info.cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(",")}</h4>
        <h4>{avgRating} Stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla.deliveryTime} Minites</h4>
      </div>
    );
  };

  export default RestaurantCard;