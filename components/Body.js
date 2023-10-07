import {data as swiggyRestaurantList} from '../mocks/mocky.js'
import RestaurantCard from './RestaurantCard.js';

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

export default Body;