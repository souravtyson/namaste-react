import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API } from "../utils/constants.js"
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {

  const [swiggyRestaurantList, setSwiggyRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchRes, setSearchRes] = useState("")

  useEffect(() => {
    fetchRestaurantData()
  }, [])

  const fetchRestaurantData = async () => {
    const rest = await fetch(SWIGGY_RESTAURANT_API);
    const data = await rest.json()
    const swiggyRestaurantList = data?.data?.cards[4]
    setSwiggyRestaurantList(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return (
    <div className="restaurant-container">
      <div className="serach-restaurant">
        <label htmlFor="search">Search : </label>
        <input type="text" id="search" value={searchRes} onChange={(e) => setSearchRes(e.target.value)} />
        <button onClick={() => {
          let x = swiggyRestaurantList.filter(res => res.info.name.toLowerCase().includes(searchRes.toLowerCase()))
          setFilteredRestaurantList(x)
        }}>Search</button>
        <button
          onClick={() => {
            setFilteredRestaurantList(swiggyRestaurantList.filter(res => res.info.avgRating > 4.2))
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className="restaurant-list">
        {
          filteredRestaurantList.length === 0 ? <Shimmer /> : filteredRestaurantList.map((restaurant) => (
            <Link key={restaurant.info.id} to={`/restaurant/${restaurant.info.id}`}><RestaurantCard restaurant={restaurant} /></Link>
          ))}
      </div>
    </div>
  );
};

export default Body;
