import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { API_URL } from "../utils/constants";
import Card from "./Card";
import Shimmer from "./Shimmer";
import Banner from "./Banner";

const CardSection = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [jsonData, setJsonData] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    handleFetch();
  }, []);

  // Filter restaurants whenever searchText or allRestaurants changes
  useEffect(() => {
    if (!searchText.trim()) {
      setFilteredRestaurants(allRestaurants);
    } else {
      const filtered = allRestaurants.filter((restaurant) =>
        restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    }
  }, [searchText, allRestaurants]);

  const handleFetch = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(API_URL);
      const data = await res.json();

      const bannerData = data?.data?.cards[0];
      setJsonData(bannerData);

      // Flatten the restaurant data structure for easier handling
      const restaurantData = data?.data?.cards?.slice(4) || [];
      const flattenedRestaurants = restaurantData
        .map(
          (item) =>
            item?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
        )
        .flat();

      setAllRestaurants(flattenedRestaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      // Optional: Add any additional logic for Enter key
      e.preventDefault();
    }
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const filterTopRated = () => {
    const topRated = allRestaurants.filter(
      (restaurant) => restaurant?.info?.avgRating >= 4.4
    );
    setFilteredRestaurants(topRated);
    setSearchText(""); // Clear search when applying filter
  };

  const showAllRestaurants = () => {
    setFilteredRestaurants(allRestaurants);
    setSearchText("");
  };

  if (isLoading) {
    return <Shimmer />;
  }

  return (
    <>
      <div className="mt-16">
        {/* Search */}
        <div className="my-12 text-center">
          <div className="relative inline-block">
            <input
              type="text"
              placeholder="Search for dishes and restaurants"
              className="w-lg rounded-md bg-white px-3 py-1.5 pr-10 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-emerald-900 sm:text-sm/6"
              value={searchText}
              onChange={handleSearchChange}
              onKeyDown={handleKeyPress}
            />
            {searchText && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>
          {searchText ? (
            <p className="mt-2 text-sm text-gray-600">
              {filteredRestaurants.length} restaurant(s) found
            </p>
          ) : (
            <Banner data={jsonData} />
          )}
        </div>

        <h1 className="text-xl font-bold mx-28">
          Restaurants with online food delivery in Bangalore
        </h1>
      </div>

      <div className="mx-28 my-6">
        <button
          type="button"
          className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer hover:bg-emerald-500 transition-colors"
          onClick={showAllRestaurants}
        >
          Show All Restaurants
        </button>
        <button
          type="button"
          className="text-white bg-blue-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 cursor-pointer hover:bg-blue-500 transition-colors"
          onClick={filterTopRated}
        >
          Top Rated (4.4+)
        </button>
        {searchText && (
          <span className="text-sm text-gray-600 ml-2">
            Searching for: "{searchText}"
          </span>
        )}
      </div>

      {/* Cards container */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full place-items-center gap-4 mx-28">
        {filteredRestaurants.length === 0 ? (
          <div className="col-span-full text-center py-8">
            <p className="text-gray-500">
              {searchText
                ? "No restaurants found matching your search."
                : "No restaurants available."}
            </p>
          </div>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant?.info?.id}`}
              key={restaurant?.info?.id}
              className="w-full"
            >
              <Card resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default CardSection;
