import React from "react";
import ReactDOM  from "react-dom/client";
import {data as swiggyRestaurantList} from './mocks/mocky.js'


const Header = () => {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img className="logo" src="https://previews.123rf.com/images/miracel123/miracel1231801/miracel123180100797/94312688-food-delivery-logo.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (props) => {

    const {restaurant} = props
    const { name: restaurantName, cuisines: cuisine, avgRating: starRating, cloudinaryImageId: restaurantImage, costForTwo} = restaurant.info;

    return (
        <div className="card-container" style={{backgroundColor: "#f0f0f0"}}>
            <img className="rest-img" alt="res-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${restaurantImage}`}/>
            <div style={{fontSize: 12}}>
                <h3 style={{margin: 3}}>{restaurantName}</h3>
                <h5 style={{margin: 1}}>{cuisine.join(", ")}</h5>
                <h5 style={{margin: 1}}>{starRating} Stars</h5>
                <h5 style={{margin: 1}}>{costForTwo}</h5>
                <h5 style={{margin: 1}}>{restaurant.info.sla.deliveryTime} min</h5>
            </div>
        </div>
    )
}

//                /* {   card.id=restaurant_grid_listing */}
const Body = () => {
    return (
        <div className="restaurant-container">
            <div className="serach-restaurant">
                <label htmlFor="search">Search : </label>
                <input type="text" id="search"/>
            </div>

            <div className="restaurant-list">
                {
                    swiggyRestaurantList.card.gridElements.infoWithStyle.restaurants.map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)
                }
                {/* <RestaurantCard restaurantName="Meghana Biryani" cuisine="Biryani, North Indianm Asian" starRating="4.4 Stars" deliveryTime="38 minutes" restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl"/>
                <RestaurantCard restaurantName="Meghana Biryani" cuisine="Biryani, North Indianm Asian" starRating="4.4 Stars" deliveryTime="38 minutes" restaurantImage="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl"/> */}
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)