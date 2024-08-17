import React, { useState} from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockdata";


const Body = () => {
	var [hotelList, setHotelList] = useState(resList);
	return (
		<div className="body">
			<div className="filter">
				<button className="filter-btn" onClick={() => {
					let data = resList.filter((restaurant) => {
						return (restaurant.data.avgRating) > 4.0
					})
					setHotelList(data);
				}}
				>Top Rated Restaurants</button>
			</div>
			<div className="res-container">
				{
					hotelList.map((restaurant) => {

						return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;

					})
				}

			</div>
		</div>
	);
}

export default Body;
