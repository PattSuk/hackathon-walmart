import {Link} from 'react-router-dom';
import card from '../assets/icons/Rectangle.svg';
import gift from '../assets/icons/Frame.svg';
import plus from '../assets/icons/+button.svg';
import minus from '../assets/icons/-Button.svg';
import chef_box from '../assets/logo/chef-box.svg';

const Checkout = (props) =>{
    return (
        <div className="checkout">
            <div className="checkout__credit-card">
                <img className="checkout__card" src={card} alt="credit card" />
                <p>Earn 5% back with the Capital One Walmart Rewards Card.</p>
            </div>
            <div className="checkout__box">
                <div className="checkout__left-box">
                    <p className="checkout__page-name">Walmart.ca &#62; Grocery &#62; Chef box &#62; Spinach Quesadillas &#62; Shopping Cart</p>
                    <h1>Your cart: 1 item</h1>
                    <img src={chef_box} alt="chef box logo" />
                    <div className="checkout__cart-box">
                        <img className="checkout__food" src="./images/food.svg" alt=""/>
                        <div className="checkout__cart-detail">
                            <p className="checkout__cart-title">Walmart Chef Box - Spinach Quesadilla</p>
                            <p><img className="checkout__gift" src={gift} alt=""/>Gift eligible</p>
                            <div className="checkout__serving">
                                <img src={minus} alt="decrease" />
                                <h2 className="checkout__serving--size">4</h2>
                                <img src={plus} alt="increase" />
                            </div>
                        </div>
                    </div>
                    <p className="checkout__remove"><u>Remove</u>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<u>Save for later</u></p>
                </div>
                <div className="checkout__right-box">
                    <div className="checkout__right-top">
                        <div className="checkout__calculate">
                            <p>Subtotal &#40; 2 items &#41;</p>
                            <p>$25.00</p>
                        </div>
                        <div className="checkout__calculate">
                            <p>Delivery</p>
                            <p>Free</p>
                        </div>
                        <div className="checkout__calculate">
                            <p>Taxes and fees <br />&#40;calculated in checkout&#41;</p>
                            <p>- -</p>
                        </div>
                    </div>
                    <div className="checkout__right-bottom">
                        <div className="checkout__calculate">
                            <p>Estimated Total</p>
                            <p>$25.00</p>
                        </div>
                        <Link to="/" className="checkout-btn">Check Out</Link>
                    </div>
                </div>
            </div>
            <div className="checkout__btm">
                <h2 className="checkout__saved">Saved</h2>
                <p className="checkout__saved-text">You have no saved items right now.</p>
                <div className="checkout__img">
                    <img src="./images/Customer.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Checkout;