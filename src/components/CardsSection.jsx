import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Card from "./Card";
import Shimmer from "./Shimmer";

const CardsSection = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  const handleFetch = async () => {
    const res = await fetch(API_URL);
    const jsonData = await res.json();
    setAllRestaurants(jsonData?.data?.cards?.slice(4));
    setFilteredList(jsonData?.data?.cards?.slice(4));
  };

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="my-16">
        {/* Search */}
        <div className="my-12 text-center">
          <input
            type="text"
            placeholder="Search for dishes and restuarants"
            className="w-lg rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-900 sm:text-sm/6"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            onKeyUp={(e) => {
              const keyName = e.key;
              if (keyName === "Enter") {
                const filtered = allRestaurants.filter((res) =>
                  res?.card?.card?.info?.name
                    ?.toLowerCase()
                    .includes(searchText.toLowerCase())
                );
                setFilteredList(filtered);
              }
            }}
          />
        </div>
        <h1 className="text-xl font-bold text-center">Restaurants</h1>
      </div>
      <div className="mx-28 my-10">
        <button
          type="button"
          className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
          onClick={() => {
            setFilteredList(allRestaurants);
          }}
        >
          All Restaurants
        </button>
        <button
          className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer"
          onClick={() => {
            const filteredList = allRestaurants.filter(
              (item) => item?.card?.card?.info?.avgRating > 4.2
            );
            setFilteredList(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      {/* Cards container */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full place-items-center ">
        {/* Card */}
        {filteredList.length === 0 ? (
          <p className="text-xl font-bold text-center mt-4">
            No restaurants found
          </p>
        ) : (
          filteredList.map((item) =>
            item?.card?.card?.gridElements?.infoWithStyle?.restaurants.map(
              (res) => <Card key={res?.info?.id} resData={res} />
            )
          )
        )}
      </div>
    </>
  );
};

export default CardsSection;
