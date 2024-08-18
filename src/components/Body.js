import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [hotelList, setHotelList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredHotelLists, setFilteredHotelLists] = useState([]);
  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.406498&lng=78.47724389999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setHotelList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredHotelLists(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  useEffect(() => {
    fetchData(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.406498&lng=78.47724389999999&restaurantId=4320&catalog_qa=undefined&submitAction=ENTER"
    );
  }, []);

  return hotelList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              let filterData = filteredHotelLists.filter((hotel) =>
                hotel.info.name.toLowerCase().includes(searchText)
              );
              setHotelList(filterData);
            }}
          >
            search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            // Assuming hotelList is the state containing the list of restaurants
            let data = hotelList.filter((restaurant) => {
              return restaurant.info.avgRating > 4.5;
            });
            // Update the state with the filtered list
            setHotelList(data);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {hotelList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
