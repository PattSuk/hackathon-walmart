import './RecipeDetails.scss';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import NavText from '../NavText/NavText';
import {ReactComponent as Chefbox} from '../../assets/logo/walmart-chef-box.svg';
import starRating from '../../assets/icons/star-rating.png';
import spinachQuesadillas from '../../assets/images/spinach-quesadilla.png';
import ingredients from '../../data/ingredients';
import reviews from '../../assets/images/reviews.png';
import listIcon from '../../assets/icons/list.png';

class RecipeDetails extends Component {
    state = {
        servings: 2,
        cost: 12.5,
    }

    handleAdd = (_e) => {
        this.setState({
            servings: (this.state.servings+2),
            cost: (6.25*(this.state.servings+2))
        })
    }

    handleSubtract = (_e) => {
        this.setState({
            servings: (this.state.servings-2),
            cost: (6.25*(this.state.servings-2))
        })
    }

    render() {
        return (
            <div className="recipe-details">
                <NavText />
                <Chefbox className="recipe-details__logo"/>
                <div className="recipe-details__flex-container">
                    <div className="recipe-details__ingredients-list">
                        {ingredients.map(product => {
                            return (
                                <img src={product.img} alt={product.alt} key={product.id} />
                            )
                        })}
                    </div>
                    <div className="recipe-details__img-container">
                        <img className="recipe-details__recipe-img" src={spinachQuesadillas} alt="spinach quesadillas"/>
                    </div>
                    <div className="recipe-details__recipe-description">
                        <h3 className="recipe-details__recipe-title">Chef Box - Spinach Quesadillas</h3>
                        <div className="recipe-details__rating">
                            <div>
                                <img className="recipe-details__rating-icon" src={starRating} alt="" />
                            </div>
                            <p className="recipe-details__rating-text">(<span>421</span>)</p>
                        </div>
                        <div className="recipe-details__ingredients">
                            <p>Spinach</p>
                            <p>Onions</p>
                            <p>Chopped Tomatoes</p>
                            <p>Lemons</p>
                            <p>Avocado</p>
                            <p>Shredded Montery Jack</p>
                            <p>Ricotta</p>
                            <p>Flour Torillas</p> 
                            <p>Ground Cumin</p>
                        </div>
                        <h3 className="recipe-details__total-price">${`${this.state.cost.toFixed(2)}`}</h3>
                        <h4 className="recipe-details__serving-price">$6.25/serving</h4>
                        <h4 className="recipe-details__serving-size">Serving Size:</h4>
                        <div className="recipe-details__btn-group">
                            { this.state.servings === 2
                                ? <button className="recipe-details__btn recipe-details__btn--less recipe-details__btn--disabled" disabled>-</button>
                                : <button className="recipe-details__btn recipe-details__btn--less" onClick={this.handleSubtract}>-</button>
                            }
                            <h1 className="recipe-details__serving-qty">{this.state.servings}</h1>
                            <button className="recipe-details__btn" onClick={this.handleAdd}>+</button>
                        </div>
                        <Link to="/checkout" ><button className="recipe-details__btn recipe-details__btn--cart">Add to cart</button></Link>
                    </div>
                </div>
            <div className="recipe-details__instructions">
                <div className="recipe-details__instructions-icon">
                    <div>
                        <img src={listIcon} alt=""/>
                    </div>
                        <p className="recipe-details__icon-text">Description</p>
                </div>
                <div className="recipe-details__instructions-recipe">
                    <h3 className="recipe-details__instructions-title">Recipe</h3>
                    <p>
                        3 ounces fresh baby spinach (about 4 cups)<br/>
                        4 green onions, chopped<br/>
                        1 small tomato, chopped<br/>
                        2 tablespoons lemon juice<br/>
                        1 teaspoon ground cumin<br/>
                        1/4 teaspoon garlic powder<br/>
                        1 cup shredded reduced-fat Monterey Jack cheese or Mexican cheese blend<br/>
                        1/4 cup reduced-fat ricotta cheese<br/>
                        6 flour tortillas (6 inches)<br/>
                        Reduced-fat sour cream, optional</p>
                </div>
                <div className="recipe-details__instructions-directions">
                    <h3 className="recipe-details__instructions-title">Directions</h3>
                    <p>
                        1. In a large nonstick skillet, cook and stir first 6 ingredients until spinach is wilted. Remove from heat; stir in cheeses. <br/><br/><br/>
                        2. Top half of each tortilla with spinach mixture; fold other    half over filling. Place on a griddle coated with cooking spray; cook over medium heat until golden brown, 1-2 minutes per side. Cut quesadillas in half; if desired, serve with sour cream.
                    </p>
                </div>
            </div>
                <div>
                    <img className="recipe-details__reviews" src={reviews} alt="reviews panel"/>
                </div>
            </div>
        );
    }
};

export default RecipeDetails;