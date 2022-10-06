import React from 'react';
import {useDispatch} from 'react-redux';
import { idbPromise } from "../../utils/helpers";
import { removeFromCart, updateCartQuantity } from '../../store/actions/cartActions';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCartHandler = item => {
    dispatch(removeFromCart(item._id))
    idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch(removeFromCart(item._id))
      idbPromise('cart', 'delete', { ...item });

    } else {
      const purchaseQuantity = parseInt(value)
      dispatch(updateCartQuantity(item._id, purchaseQuantity));
      idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });

    }
  }

  return (
    <div className="flex-row">
      <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div>
      <div>
        <div>{item.name}, ${item.price}</div>
        <div>
          <span>Qty:</span>
          <input
            type="number"
            placeholder="1"
            value={item.purchaseQuantity}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCartHandler(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;