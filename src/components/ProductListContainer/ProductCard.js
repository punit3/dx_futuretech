import generateDynamicColorClass from "../../util/generateCss";

// Array defining color classes for different property types
const propertyType = [
  { type: "Apartment", colorClass: "red" },
  { type: "Flat", colorClass: "blue" },
  { type: "Villa", colorClass: "yellow" },
];

// Array defining color classes for different property statuses
const propertyStatus = [
  { type: "grey", colorClass: "grey-bg" },
  { type: "red", colorClass: "red-bg" },
  { type: "yellow", colorClass: "yellow-bg" },
  { type: 'green', colorClass: "green-bg" },
  { type: "blue", colorClass: "blue-bg" },
];

function ProductCard({ ...item }) {
  // Determine the color class for property type
  const mainClass = "apartment-type-container";
  const combinedClass = generateDynamicColorClass(mainClass, item.type, propertyType);

  // Determine the color class for property status
  const badgeBaseClass = "status-badge-container";
  const combinedBadgeClass = generateDynamicColorClass(badgeBaseClass, item.statusnew, propertyStatus);

  return (
    <div className="product-card">
      {/* Property image */}
      <img className="card-image" src={item.img} alt={"property-image"} />

      {/* Share icon */}
      <div className="share-icon">
        <img src="/images/share-icon.svg" alt="filter-icon" />
      </div>

      {/* Property type with dynamic color class */}
      <div className={combinedClass}>{item.type}</div>

      {/* Slider icon */}
      <img className="slider" src="/images/slider.svg" alt="filter-icon" />

      {/* Property details */}
      <div className="card-details-container">
        <div className="card-inner-frame">

          {/* Property status badge with dynamic color class */}
          <div className={combinedBadgeClass}>
            <div className="badge">
              <p>{item.status}</p>
            </div>
          </div>

          {/* Property title */}
          <p className="card-title">{item.name}</p>

          {/* Property address */}
          <div className="card-address-container">
            <img src="/images/location-icon.svg" alt="filter-icon" />
            <p>{item.address}</p>
          </div>

          {/* Rent details - Rooms, Baths, Area */}
          <div className="rent-details-container">
            {/* Rooms details */}
            <div className="rooms-details">
              <img src="/images/bed-icon.svg" alt="filter-icon" />
              <div>{item.rooms}</div>
            </div>

            {/* Baths details */}
            <div className="baths-details">
              <img src="/images/bath-icon.svg" alt="filter-icon" />
              <div>{item.baths}</div>
            </div>

            {/* Area details */}
            <div className="area-details">
              <img src="/images/area-icon.svg" alt="area-icon" />
              <div>{item.area}</div>
            </div>
          </div>

          {/* Rent value with dynamic color class */}
          <p className="rent-value-container apartment-type-text">
            {item.rent}
          </p>

        </div>
      </div>
    </div>
  );
}

export default ProductCard;
