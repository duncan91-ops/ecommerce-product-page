import { useState } from "react";
import Wrapper from "../assets/wrappers/ProductShow";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const products = [product1, product2, product3, product4];
const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

const ProductShow = ({
  openLightbox,
  isLightboxOpen,
}: {
  openLightbox: () => void;
  isLightboxOpen?: boolean;
}) => {
  const [current, setCurrent] = useState<number>(1);

  const prev = () => {
    setCurrent((prevState) => {
      if (prevState === 1) {
        return products.length;
      }
      return prevState - 1;
    });
  };

  const next = () => {
    setCurrent((prevState) => {
      if (prevState === products.length) {
        return 1;
      }
      return prevState + 1;
    });
  };

  return (
    <Wrapper className={`${isLightboxOpen && "lightbox"}`}>
      {products.map((product, index) => {
        return (
          <button
            key={product}
            onClick={() => openLightbox()}
            className={`product-btn ${index + 1 === current ? "active" : ""}`}
          >
            <img src={product} alt="product" className="product-img" />
          </button>
        );
      })}
      <button onClick={prev} className="btn btn-prev">
        {/* <img src={iconPrev} alt="button previous" className="btn-icon" /> */}
        <svg
          className="btn-icon"
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 1 3 9l8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <button onClick={next} className="btn btn-next">
        {/* <img src={iconNext} alt="button next" className="btn-icon" /> */}
        <svg
          className="btn-icon"
          width="12"
          height="18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m2 1 8 8-8 8"
            stroke="#1D2026"
            strokeWidth="3"
            fill="none"
            fillRule="evenodd"
          />
        </svg>
      </button>
      <div className="thumbnails">
        {thumbnails.map((thumbnail, index) => {
          return (
            <button
              key={thumbnail}
              onClick={() => setCurrent(index + 1)}
              className={`thumbnail__btn ${
                index + 1 === current ? "active" : ""
              }`}
            >
              <img src={thumbnail} alt="thumbnail" className="thumbnail" />
            </button>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default ProductShow;
