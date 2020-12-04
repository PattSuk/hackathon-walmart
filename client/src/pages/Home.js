import React from 'react';
import {Link} from 'react-router-dom';
import delivery_bar from '../assets/icons/delivery.svg';
import discount from '../assets/icons/discount.svg';
import chef_box from '../assets/icons/chef-box-bar.svg';
import circles from '../assets/icons/circles.svg';


function Home () {
    return (
        <main>
            <div className="hero">
                <img src={delivery_bar} alt="delivery detail" />
                <img className="hero__discount" src={discount} alt="discount bar" />
                <Link className="hero__chef-box" to="/spinach-quesadillas"><img src={chef_box} alt="Chef box hero" /></Link>
                <img src={circles} alt="circles" />
                <img className="hero__advertise" src="./images/advertise.svg" alt="advertise" />
                <img src="./images/body.svg" alt="body" />
            </div>
        </main>
    )
}

export default Home;