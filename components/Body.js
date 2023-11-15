import { useState } from "react";
import { data as mockSwiggyRestaurantList } from "../mocks/mocky.js";
import RestaurantCard from "./RestaurantCard.js";

const Body = () => {
  const [swiggyRestaurantList, setSwiggyRestaurantList] = useState(
    mockSwiggyRestaurantList.card.gridElements.infoWithStyle.restaurants
  );
  const [searchRes, setSearchRes] = useState("")

  return (
    <div className="restaurant-container">
      <div className="serach-restaurant">
        <label htmlFor="search">Search : </label>
        <input type="text" id="search" value={searchRes} onChange={(e) => setSearchRes(e.target.value)}/>
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
        {swiggyRestaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
