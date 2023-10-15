import {data as swiggyRestaurantList} from '../mocks/mocky.js'
import RestaurantCard from './RestaurantCard.js';



const Body = () => {
    return (
        <div className="restaurant-container">
            <div className="serach-restaurant">
                <label htmlFor="search">Search : </label>
                <input type="text" id="search"/>
            </div>

            <div className="restaurant-list">
                {
                    swiggyRestaurantList
                    .card
                    .gridElements
                    .infoWithStyle
                    .restaurants
                    .map((restaurant) => <RestaurantCard key={restaurant.info.id} restaurant={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default Body;