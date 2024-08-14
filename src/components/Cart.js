import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItmes = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-10 p-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      <div className="w-6/12 mx-auto">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={clearCartItems}
        >
          Clear Cart
        </button>
        {cartItmes.length === 0  && <h1>Cart is empty. Add items to the Cart</h1> }
        <ItemList items={cartItmes} />
      </div>
    </div>
  );
};

export default Cart;
