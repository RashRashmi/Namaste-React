import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constant";
import { addItems, removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // dispatch an action
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2  border-grey-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span> {item?.card?.info?.name}</span>
              <span>
                {" "}
                - ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>

            <p className="text-md">{item?.card?.info?.description}</p>
          </div>

          <div className=" w-3/12 p-4">
            <div className="absolute">
              
              <button
                className="p-2 bg-black  text-white shadow-lg mx-auto rounded-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
             
            </div>

            <img
              src={CDN_URL + `${item?.card?.info?.imageId}`}
              className="rounded-lg w-full h-40"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
