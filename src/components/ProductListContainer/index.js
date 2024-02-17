import "../../styles/productList.css";
import productList from "../../data";
import ProductCard from "./ProductCard";

function ProductListContainer() {

  return (
    <div className="product-list-main-container">
      <div className="product-list-inner-container">
        {/* Product list header */}
        <div className="product-list-header">
          <h5 className="product-list-heading">Showing 6 Properties</h5>
          <div className="headers-and-filters">
            {/* List view icon */}
            <div className="list-icon-container">
              <img src="/images/list-view-icon.svg" alt="list-icon" />
            </div>
            {/* Sort and filter options */}
            <div className="sort-filter-main-container">
              <div className="sort-icon-text-container">
                {/* Filter icon */}
                <div>
                  <img src="/images/filter-icon.svg" alt="filter-icon" />
                </div>
                {/* Sort text */}
                <div>
                  <p className="sort-text">Sort by:</p>
                </div>
              </div>
              {/* Sort key and value */}
              <div className="sort-key-value-container">Name</div>
              {/* Arrow icon */}
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.865234 0.216797L4.43323 3.7848L8.00023 0.216797H0.865234Z"
                  fill="#212121"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Product list container */}
        <div className="product-list-container">
          {productList.map((item, i) => {
            // Render ProductCard component for each item in the productList
            return <ProductCard key={i} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductListContainer;
