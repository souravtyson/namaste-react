import { useEffect, useState } from "react";
import { SWIGGY_RESTAURANT_API, SWIGGY_RESTAURANT_API_UPDATE } from "../utils/constants.js"
import RestaurantCard from "./RestaurantCard.js";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {

  const [swiggyRestaurantList, setSwiggyRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([])
  const [searchRes, setSearchRes] = useState("")
  const location = {
    "lat":12.9254199,"lng":77.59184900000001
  }

  const handleScroll = () => {
    // Get the scroll position and the window height
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;

    // Get the height of the document
    const documentHeight = document.documentElement.offsetHeight;

    // Calculate the distance from the bottom of the page
    const bottomDistance = documentHeight - scrollTop - windowHeight;
    console.table(documentHeight, scrollTop, windowHeight, bottomDistance)
    // If the distance is less than or equal to 50 pixels, fetch more posts
    // You can adjust this value according to your preference
    if (bottomDistance <= 30) {
      // fetchUpdatedRestaurant()
    } 
  }


  useEffect(() => {
    fetchRestaurantData()
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])


  let updateRequest = {}

  const fetchRestaurantData = async () => {
    const rest = await fetch(SWIGGY_RESTAURANT_API);
    const data = await rest.json()
    const swiggyRestaurantList = data?.data?.cards[4]
    updateRequest = {...data?.data?.pageOffset, ...location, _csrf: data?.csrfToken, seoUrl: data?.data?.cards[11]?.card?.card.seoParams}
    console.log(updateRequest)
    fetchUpdatedRestaurant()
    setSwiggyRestaurantList(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(swiggyRestaurantList?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const fetchUpdatedRestaurant = async () => {
    const resp = await fetch("https://cors-proxy.htmldriven.com/?url=https://www.swiggy.com/dapi/restaurants/list/update", {
      "headers": {
        "__fetch_req__": "true",
        "accept": "*/*",
        "accept-language": "en-IN,en-GB;q=0.9,en-US;q=0.8,en;q=0.7,hi;q=0.6",
        "cache-control": "no-cache",
        "content-type": "application/json",
        "pragma": "no-cache",
        "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin"
      },
      "body": "{\"lat\":12.8479159,\"lng\":77.6528024,\"nextOffset\":\"COVCELQ4KID4vuyl5Zu4RTCnEzgC\",\"widgetOffset\":{\"NewListingView_category_bar_chicletranking_TwoRows\":\"\",\"NewListingView_category_bar_chicletranking_TwoRows_Rendition\":\"\",\"Restaurant_Group_WebView_PB_Theme\":\"\",\"Restaurant_Group_WebView_SEO_PB_Theme\":\"\",\"collectionV5RestaurantListWidget_SimRestoRelevance_food_seo\":\"25\",\"inlineFacetFilter\":\"\",\"restaurantCountWidget\":\"\"},\"filters\":{},\"seoParams\":{\"seoUrl\":\"https://www.swiggy.com/\",\"pageType\":\"FOOD_HOMEPAGE\",\"apiName\":\"FoodHomePage\"},\"page_type\":\"DESKTOP_WEB_LISTING\",\"_csrf\":\"BDAqgoSsN7zO-WhsRvZAWhQw320Sne1RObXuixds\"}",
      "method": "POST",
      "credentials": "omit"
    });
    const respData = await resp.json();
    console.log(respData)
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
