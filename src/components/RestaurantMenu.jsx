import { useParams } from "react-router-dom";
import { CDN_IMG } from "../utils/constants";
import starImage from "../assets/star.png";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;

  // Restaurant info
  const restaurantInfo = menu?.cards[2]?.card?.card?.info;

  if (!restaurantInfo) {
    return (
      <div className="p-4 text-center">
        Restaurant information not available
      </div>
    );
  }

  const {
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = restaurantInfo;

  // Menu categories
  const menuCards = menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;

  if (!menuCards) {
    return <div className="p-4 text-center">Menu not available</div>;
  }

  // Filter out non-menu cards and get actual menu categories
  const menuCategories = menuCards.filter(
    (card) =>
      card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ||
      card?.card?.card?.itemCards
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Restaurant Header */}
      <h3 className="text-2xl font-bold mb-4">{name}</h3>

      {/* Restaurant Info Card */}
      <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 mb-8">
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            <img src={starImage} alt="rating" className="w-5 h-5 mr-1" />
            <span className="mr-4 font-bold text-sm">
              {avgRatingString} ({totalRatingsString})
            </span>
          </div>
          <span className="text-sm font-bold">{costForTwoMessage}</span>
        </div>

        <p className="text-sm text-red-400 font-bold mb-1">
          {cuisines?.join(", ")}
        </p>

        <p className="text-sm font-bold mb-1">
          Outlet <span className="font-medium text-gray-600">{locality}</span>
        </p>

        <p className="text-sm font-bold">{sla?.slaString}</p>
      </div>

      {/* Menu Categories */}
      {menuCategories.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No menu items available</p>
        </div>
      ) : (
        menuCategories.map((category, categoryIndex) => {
          const categoryData = category?.card?.card;
          const categoryTitle =
            categoryData?.title || `Category ${categoryIndex + 1}`;
          const itemCards = categoryData?.itemCards || [];

          if (itemCards.length === 0) return null;

          return (
            <div key={categoryIndex} className="mb-8">
              {/* Category Title */}
              <h2 className="text-lg font-bold mb-4 text-gray-800">
                {categoryTitle} ({itemCards.length})
              </h2>

              {/* Menu Items */}
              <div className="space-y-4">
                {itemCards.map((item, itemIndex) => {
                  const itemInfo = item?.card?.info;

                  if (!itemInfo) return null;

                  const {
                    name: itemName,
                    price,
                    defaultPrice,
                    description,
                    imageId,
                    itemAttribute,
                    ratings,
                  } = itemInfo;

                  const itemPrice = price || defaultPrice;
                  const isVeg = itemAttribute?.vegClassifier === "VEG";
                  const rating = ratings?.aggregatedRating?.rating;

                  return (
                    <div
                      key={itemInfo?.id || itemIndex}
                      className="flex justify-between items-start border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300"
                    >
                      {/* Item Info */}
                      <div className="flex-1 pr-4">
                        <h3 className="font-bold text-gray-800 mb-2">
                          {itemName}
                        </h3>

                        <div className="flex items-center mb-2">
                          <p className="font-medium text-gray-900 mr-2">
                            ₹{itemPrice ? (itemPrice / 100).toFixed(2) : "N/A"}
                          </p>
                          <span className="text-lg">{isVeg ? "🌱" : "🍗"}</span>
                        </div>

                        {rating && (
                          <div className="flex items-center mb-2">
                            <img
                              src={starImage}
                              alt="rating"
                              className="w-4 h-4 object-contain mr-1"
                            />
                            <span className="text-sm text-emerald-900 font-bold">
                              {rating}
                            </span>
                          </div>
                        )}

                        {description && (
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {description}
                          </p>
                        )}
                      </div>

                      {/* Item Image and Add Button */}
                      <div className="w-28 h-20 flex-shrink-0 relative">
                        {imageId ? (
                          <img
                            src={CDN_IMG + imageId}
                            alt={itemName}
                            className="w-full h-full object-cover rounded-lg"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                            <span className="text-gray-400 text-xs">
                              No Image
                            </span>
                          </div>
                        )}

                        <button
                          className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-md shadow-md hover:bg-emerald-600 transition font-bold cursor-pointer"
                          onClick={() => {
                            // Add to cart logic here
                            console.log(`Added ${itemName} to cart`);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Category Separator */}
              {categoryIndex < menuCategories.length - 1 && (
                <div className="w-full h-2 bg-gray-100 rounded my-8"></div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
};

export default RestaurantMenu;
