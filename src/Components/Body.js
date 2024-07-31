import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () =>{
    return(
      <div className="body">
        <div className="search">
          Search
        </div>
        <div className="res-container">
          {/* <RestaurantCard resData={resObj[0]}/>
          <RestaurantCard resData={resObj[1]}/>
          <RestaurantCard resData={resObj[2]}/> */}
  
  
          {
            resList.map((restaurant)=>(
              <RestaurantCard key={restaurant.info.id} resData={restaurant} />
            ))
          }
         
  
  
  
          {/* <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
           */}
        </div>
      </div>
    )
  }

  export default Body;