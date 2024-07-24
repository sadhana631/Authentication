import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <div className="nav-bar-moblie-logo-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        />

        <button type="button" className="nav-mobile-btn">
         <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
          className="nav-bar-img"
         />
        </button>      
      </div>

      <div className="nav-content" "nav-bar-large-container">
        <img
          className="website-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="mav-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Product</li>
          <li className="nav-menu-item">Cart</li>
        </ul>  
        <button type="button" className="logout-desktop-btn">
          Logout
        </button>
      </div>
      <div className="nav-menu-mobile">
        <ul className="nav-menu-list-mobile">
          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js-nxt-trendz-home-icon.png"
              alt="nav home"
              className="nav-bar-img"
            />  
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-Products-icon.png"
              alt="nav Products"
              className="nav-bar-img"
            />  
          </li>

          <li className="nav-menu-item-mobile">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
              className="nav-bar-img"
            />  
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header

  


    

  