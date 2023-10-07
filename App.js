import React from "react";
import ReactDOM  from "react-dom/client";


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

const RestaurantCard = () => {
    return (
        <div className="card-container" style={{backgroundColor: "#f0f0f0"}}>
            <img className="rest-img" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/cvo1djhbwrgfqd64k0tl"/>
            <div style={{fontSize: 12}}>
                <h3 style={{margin: 3}}>Meghana Biryani</h3>
                <h5 style={{margin: 1}}>Biryani, North Indianm Asian</h5>
                <h5 style={{margin: 0}}>4.4 Stars</h5>
                <h5 style={{margin: 0}}>38 minutes</h5>
            </div>
        </div>
    )
}

const Body = () => {
    return (
        <div className="restaurant-container">
            <div className="serach-restaurant">
                <label for="search">Search : </label>
                <input type="text" id="search"/>
            </div>
            <div className="restaurant-list">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
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