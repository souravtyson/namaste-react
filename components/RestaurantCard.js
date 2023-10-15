import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {

    const {restaurant} = props
    const { name: restaurantName, cuisines: cuisine, avgRating: starRating, cloudinaryImageId: restaurantImage, costForTwo} = restaurant.info;

    return (
        <div className="card-container" style={{backgroundColor: "#f0f0f0"}}>
            <img className="rest-img" alt="res-logo" src={`${CDN_URL}${restaurantImage}`}/>
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

export default RestaurantCard