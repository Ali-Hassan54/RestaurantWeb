"use client";
import { useState } from "react";
import RestaurantLogin from "../_Components/restaurantLogin";
import RestaurantSignup from "./../_Components/restaurantSignup";
import RestaurantHeader from "../_Components/RestaurantHeader";
const Restaurant = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

  const handleToggle = () => {
    setIsLogin(!isLogin); 
  };

  return (
    <>
      <RestaurantHeader/>
       {isLogin ? (
        <RestaurantLogin onToggle={handleToggle} />
      ) : (
        <RestaurantSignup onToggle={handleToggle} />
      )}
    </>
  );
};
export default Restaurant;
