import { MENU_ITEMS_IMGAGE } from "../utils/constants";
const CartItem = ({ imageId, name, category, price, quantity }) => {
  return (
    <>
      <div className="flex gap-4 items-center bg-gray-100 shadow-lg w-6/12 p-4 justify-between rounded-lg mb-4 "
      data-testid="cartItem"
      >
        <div className="flex items-center gap-4 ">
          <div className=" w-30 rounded-lg overflow-hidden  ">
            <img
              className="w-full object-cover"
              src={MENU_ITEMS_IMGAGE + imageId}
            ></img>
          </div>
          <div className="text-lg font-bold justify-self-start">
            {name}
            <p className="text-sm font-normal">{category}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="text-lg font-bold">{price} </div>
          <div className="text-lg font-bold">
            <button className="cursor-pointer">-</button>
            {quantity}
            <button className="cursor-pointer">+</button>
          </div>
          <div className="text-lg font-bold">delete</div>
        </div>
      </div>
    </>
  );
};
export default CartItem;
