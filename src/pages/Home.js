// Importing components for the Home page
import NavBar from "../components/NavBar";
import ProductListContainer from "../components/ProductListContainer";
import SearchBarContainer from "../components/SearchBarContainer";

// Home component representing the main content of the Home page
function Home() {
  return (
    // Main container for the Home page
    <div className="home-page">
      
      {/* Navigation bar */}
      <NavBar />
      
      {/* Search bar container */}
      <SearchBarContainer />
      
      {/* Product list container */}
      <ProductListContainer />

    </div>
  );
}

export default Home;
