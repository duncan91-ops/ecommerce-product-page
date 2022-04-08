import Wrapper from "../assets/wrappers/Product";
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import { useGlobalContext } from "../context";
import { increase, decrease, addToCart } from "../actions";

const Product = ({ children }: { children: React.ReactNode }) => {
  const { state, dispatch } = useGlobalContext();

  return (
    <Wrapper>
      {children}
      <div className="details">
        <div className="company">Sneaker Company</div>
        <h1 className="product">Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="prices">
          <div className="current">
            <div className="price">$125.00</div>
            <div className="discount">50%</div>
          </div>
          <div className="former">
            <del>$250.00</del>
          </div>
        </div>
        <div className="cta">
          <div className="amount-input">
            <button
              onClick={() => dispatch(decrease())}
              className="btn btn-minus"
            >
              <img src={iconMinus} alt="quantity" className="btn-icon" />
            </button>
            <span className="amount">{state.quantity}</span>
            <button
              onClick={() => dispatch(increase())}
              className="btn btn-plus"
            >
              <img src={iconPlus} alt="add quantity" className="btn-icon" />
            </button>
          </div>
          <button
            onClick={() => dispatch(addToCart())}
            className="btn cart-btn"
          >
            <span>
              <svg
                className="cart-icon"
                width="22"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                  fill="#69707D"
                  fillRule="nonzero"
                />
              </svg>
              Add to cart
            </span>
          </button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Product;
