import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU } from "../utils/constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [restaurantDetail, setRestaurantDetails] = useState([])
    const { resID } = useParams()

    useEffect(() => {
        getRestaurantInfo();
    }, [])



    const getRestaurantInfo = async () => {
        const restDetails = await fetch(`${RESTAURANT_MENU}${resID}`)
        const json = await restDetails.json()
        setRestaurantDetails(json.data)
    }

    if (restaurantDetail.length === 0) return <Shimmer />

    const { name, cuisines, avgRatingString, costForTwoMessage } = restaurantDetail.cards[0].card.card.info
    const { itemCards } = restaurantDetail.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card

    return (
        <div>
            <h1>{name}</h1>
            <h3>Menu</h3>
            <h4>Cuisines : - {cuisines.join(', ')}</h4>
            <h4>Ratings: - {avgRatingString}</h4>
            <h4>Cost for two : - {costForTwoMessage}</h4>
            <ul>
                {
                    itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)
                }
            </ul>
        </div>
    )
}

export default RestaurantMenu;