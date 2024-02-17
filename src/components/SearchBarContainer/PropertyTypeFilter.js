// PropertyTypeFilter component for displaying a filter with an input field and dropdown icon
function PropertyTypeFilter({ placeholder }) {
  return (
    // Container for the property type search filter
    <div className="property-type-search-filter-container">
      
      {/* Input field for property type with a placeholder */}
      <input
        placeholder={placeholder}
        className="property-type-input-field"
      ></input>

      {/* Dropdown icon */}
      <div className="dropdown-grey-icon">
        <img src="/images/dropdown-grey-icon.svg" alt="dropdown icon" />
      </div>
      
    </div>
  );
}

export default PropertyTypeFilter;
