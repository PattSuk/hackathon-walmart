import './NavText.scss';
import { Link } from 'react-router-dom';


const NavText = () => {
    return (
        <div>
            <Link to="#"><p className="nav-text">Walmart.ca &gt; Grocery &gt; Chef Box &gt; Spinach Quesadilla</p></Link>
        </div>
    );
};

export default NavText;