// Importing styles for the NavBar
import "../styles/navbar.css";

// NavBar component for displaying a navigation bar with a logo, menu items, and user icons
function NavBar() {
  return (
    // Main container for the navigation bar
    <div className="navbar-container">
      <div className="navbar-inner-container">
        
        {/* Logo container */}
        <div className="navbar-logo-container">
          <div className="logo-container">
            <img src="/images/logo.svg" alt="logo" />
          </div>
        </div>

        {/* Menu items container */}
        <div className="navbar-menu-container">
          
          {/* Home menu item */}
          <div className="navbar-menu-item">
            <span className="menu-text">Home</span>
            <span className="menu-dropdown-icon">
              <img src="/images/dropdown.svg" alt="dropdown icon" />
            </span>
          </div>

          {/* Letting menu item (active) */}
          <div className="navbar-menu-item active-menu">
            <span className="menu-text">Letting</span>
            <span className="menu-dropdown-icon active-icon">
              <img src="/images/active-dropdown.svg" alt="active dropdown icon" />
            </span>
          </div>

          {/* Renting menu item */}
          <div className="navbar-menu-item">
            <span className="menu-text">Renting</span>
            <span className="menu-dropdown-icon">
              <img src="/images/dropdown.svg" alt="dropdown icon" />
            </span>
          </div>

        </div>

        {/* User icons container */}
        <div className="user-menu-icons-container">
          
          {/* Notification bell icon */}
          <div className="user-bell-icon-container">
            <img src="/images/notification-icon.svg" alt="notification bell icon" />
          </div>

          {/* User icon */}
          <div className="user-icon-container">
            <img src="/images/user-icon.svg" alt="user icon" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default NavBar;
