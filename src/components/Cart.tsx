import Wrapper from "../assets/wrappers/Cart";
import { useGlobalContext } from "../context";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import iconDelete from "../assets/images/icon-delete.svg";
import { clearCart } from "../actions";

const Cart = ({ closeCart }: { closeCart: () => void }) => {
  const { state, dispatch } = useGlobalContext();
  const { price, cart } = state;
  const total = price * cart;

  return (
    <Wrapper>
      <h2 className="title">Cart</h2>
      <div className="content">
        {cart > 0 ? (
          <div className="details">
            <div className="item">
              <div className="left">
                <div className="item__thumbnail-box">
                  <img
                    src={thumbnail}
                    alt="product thumbnail"
                    className="item__thumbnail"
                  />
                </div>
                <div className="item__description">
                  <p className="item__name">Autumn Limited Edition...</p>
                  <p className="item__price">
                    ${price.toFixed(2)} x {cart}{" "}
                    <span className="item__price-total">
                      &nbsp;${total.toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="right">
                <button
                  onClick={() => dispatch(clearCart())}
                  className="delete"
                >
                  <img
                    src={iconDelete}
                    alt="delete icon"
                    className="delete__icon"
                  />
                </button>
              </div>
            </div>
            <button
              onClick={() => {
                dispatch(clearCart());
                closeCart();
              }}
              className="checkout"
            >
              Checkout
            </button>
          </div>
        ) : (
          <p className="empty">Your cart is empty</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Cart;
