import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <>
      <div className="grid place-items-center mt-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        {cartItems.map((el) => {
          const { name, price, defaultPrice, imageId, category } =
            el?.card?.info;

          return (
            <CartItem
              name={name}
              imageId={imageId}
              price={price != null ? price/100 : defaultPrice/100}
              category={category}
              quantity={el?.quantity}
            />
          );
        })}
      </div>
    </>
  );
};
export default Cart;
