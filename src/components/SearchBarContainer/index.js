// Importing styles for the SearchBar
import "../../styles/searchbar.css";

// Importing related components
import PropertyTypeFilter from "./PropertyTypeFilter";
import SearchField from "./SearchField";

function SearchBarContainer() {
  return (
    // Main container for the search bar
    <div className="searchbar-container">
      
      {/* Container for search fields */}
      <div className="search-fields-container">
        {/* Search field for general search */}
        <SearchField />

        {/* Property type filter */}
        <PropertyTypeFilter placeholder={"Property Type"} />

        {/* Property status filter */}
        <PropertyTypeFilter placeholder={"Property Status"} />
      </div>

      {/* Container for additional search filters */}
      <div className="search-filters-container">
        
        {/* More filters section */}
        <div className="more-filter-container">
          <span className="more-filters-text">More filters</span>
          <span className="filter-dropdown-icon">
            <img src="/images/dropdown.svg" alt="dropdown icon" />
          </span>
        </div>

        {/* Search button */}
        <button className="filter-btn">
          <span className="filter-btn-text">Search</span>
        </button>

        {/* Placeholder div (consider removing or adding content) */}
        <div></div>
      </div>
    </div>
  );
}

export default SearchBarContainer;
