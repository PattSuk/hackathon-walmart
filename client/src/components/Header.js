import {Link} from 'react-router-dom';
import sun_logo from '../assets/logo/sun-logo.svg';
import walmart_logo from '../assets/logo/Walmart_logo.svg';
import slogan from '../assets/logo/slogan.svg';
import search_bar from '../assets/icons/search_bar.svg';
import cart_icon from '../assets/icons/cart.svg';
import department_icon from '../assets/icons/deparment-icon.svg';

function Header () {
    return (
        <header className="header">
            <div className="header__covid">
                <img className="header__covid--img" src={sun_logo} alt="covid info" />
                <p className="header__covid--text">Our COVID-19 Response | Moving forward safely  &#62; Learn more</p>
            </div>
            <div className="header__middle-bar">
                <div className="header__logo">
                    <img src={walmart_logo} alt="walmart logo" />
                    <img className="header__logo--slogan" src={slogan} alt="walmart slogan" />
                </div>
                <img src={search_bar} alt="search bar" />
                <img src={cart_icon} alt="cart icon" />
            </div>
            <nav  className="header__nav">
                <div className="header__nav--left">
                    <img src={department_icon} alt="department icon" />
                    <Link>Deals</Link>
                    <Link>Toys</Link>
                    <Link>HoLinkday</Link>
                    <Link>Gift Cards</Link>
                    <Link>Clothing</Link>
                    <Link>Electronics</Link>
                    <Link>Health</Link>
                </div>
                <div className="header__nav--right">
                    <Link>Shop grocery</Link>
                    <Link>Store finder</Link>
                    <Link>Flyers</Link>
                    <Link>Sign in</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;