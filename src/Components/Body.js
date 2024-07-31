import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () =>{
    const [listofRestaurant,setlistofRestaurant] = useState(resList);

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