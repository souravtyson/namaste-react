import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constants.js"
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";

const Body = () => {

  const [swiggyRestaurantList, setSwiggyRestaurantList] = useState([]);
  const [searchRes, setSearchRes] = useState("")

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const fetchRestaurantData = async () => {
    const rest = await fetch(SWIGGY_RESTAURANT_API);
    const data = await rest.json()
    const swiggyRestaurantList = data?.data?.cards[4]
    setSwiggyRestaurantList(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    console.log(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <div className="restaurant-container">
      <div className="serach-restaurant">
        <label htmlFor="search">Search : </label>
        <input type="text" id="search" value={searchRes} onChange={(e) => setSearchRes(e.target.value)} />
        <button onClick={() => {
          let x = swiggyRestaurantList.filter(res => res.info.name.toLowerCase().includes(searchRes.toLowerCase()))
          setSwiggyRestaurantList(x)
        }}>Search</button>
        <button
          onClick={() => {
            setSwiggyRestaurantList(swiggyRestaurantList.filter(res => res.info.avgRating > 4.2))
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restaurant-list">
        {
          swiggyRestaurantList.length === 0 ? <Shimmer /> : swiggyRestaurantList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          ))}
      </div>
    </div>
  );
};

export default Body;
