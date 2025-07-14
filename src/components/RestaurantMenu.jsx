import { useParams } from "react-router-dom";
import { CDN_IMG } from "../utils/constants";
import starImage from "../assets/star.png";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);

  if (menu === null) return <Shimmer />;

  const {
    id,
    name,
    locality,
    costForTwoMessage,
    cuisines,
    avgRatingString,
    totalRatingsString,
    sla,
  } = menu?.cards[2]?.card?.card?.info;

  const cards =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.slice(2);

  const { itemCards } =
    menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const itemLen = itemCards.length;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold">{name}</h3>
      <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4">
        <div className="flex items-center">
          <div className="flex ">
            <img src={starImage} alt="rating" className="inline w-5 h-5 pr-1" />
            <span className="mr-4 font-bold text-sm">
              {avgRatingString + " (" + totalRatingsString + ")"}
            </span>
          </div>
          <span className="text-sm font-bold">{costForTwoMessage}</span>
        </div>
        <p className="text-sm text-red-400 font-bold">{cuisines.join(", ")}</p>
        <p className="text-sm font-bold">
          Outlet <span className="font-medium text-gray-600">{locality}</span>
        </p>
        <p className="text-sm font-bold">{sla.slaString}</p>
      </div>

      {cards.map((cat) => (
        <div>
          <div className="mb-8">
            <h2 className="text-md font-bold mb-4">
              {cat?.card?.card?.title + "(" + itemLen + ")"}
            </h2>
            {itemCards.map((item) => (
              <div className="flex justify-between items-center border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4">
                <div>
                  <h3 className="font-bold">{item?.card?.info?.name}</h3>
                  <p className="mt-2 font-medium">
                    ₹{item?.card?.info?.price / 100}
                    {item?.card?.info?.itemAttribute?.vegClassifier
                      ? "🌱"
                      : "🍗"}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={starImage}
                      alt="rating"
                      className="w-4 h-4 object-contain mr-1"
                    />
                    <span className="text-sm text-emerald-900 mr-4 font-bold">
                      {item?.card?.info?.ratings?.aggregatedRating?.rating}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className="w-28 h-20 flex-shrink-0 relative">
                  <img
                    src={CDN_IMG + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-emerald-500 text-white text-xs px-3 py-1 rounded-md shadow-md hover:bg-emerald-600 transition font-bold cursor-pointer">
                    Add
                  </button>
                </div>
              </div>
            ))}
          </div>
          <span className="block w-full h-1 bg-gray-300 rounded my-4"></span>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
