import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props)=>{
  return(
    <div className="res-card">
      <img className="res-logo" src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>Rating : 4.0</h4>
      <h4>38 minutes</h4>
    </div>
  )
}

const Body = () =>{
  return(
    <div className="body">
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestaurantCard resName="meghna Food" cuisine="Biryani, Tasty Food"/>
        <RestaurantCard resName="KFC" cuisine="Burger, Fast Food"/>
        
      </div>
    </div>
  )
}

const AppLayout = ()=>{
  return(
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
