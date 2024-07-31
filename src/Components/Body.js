import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
const Body = () =>{
    const [listofRestaurant,setlistofRestaurant] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65200&lng=77.16630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setlistofRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    return(
      <div className="body">
        <div className="search">
          Search
        </div>
        {/* filtered list */}

        <div className="filter">
            <button className="filter-btn" onClick={()=>{
                const filteredList = listofRestaurant.filter((res)=>res.info.avgRating>4)
                setlistofRestaurant(filteredList)
            }}>Top rated restaurant</button>
        </div>
        <div className="res-container">
          
  
  
          {
            listofRestaurant.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          }
         
  
  
  
        </div>
      </div>
    )
  }

  export default Body;