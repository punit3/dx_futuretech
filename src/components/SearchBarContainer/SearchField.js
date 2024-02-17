// SearchField component for displaying a search input field with icons
function SearchField() {
  return (
    // Wrapper for the search input field
    <>
      <div className="search-input-field">
        
        {/* Search icon */}
        <img className="search-icon" src="/images/search-icon.svg" alt="search-icon" />
        
        {/* Input field for searching */}
        <input placeholder="Search Area, Location, Property" />

        {/* Breadcrumb icon */}
        <div className="breadcrumb-icon">
          <img src="/images/breadcrumb-icon.svg" alt="breadcrumb-icon" />
        </div>
        
      </div>
    </>
  );
}

export default SearchField;
