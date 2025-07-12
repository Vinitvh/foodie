import menuData from "../utils/menuData";
import starImage from "../assets/star.png";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { CDN_IMG } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=684427&catalog_qa=undefined&submitAction=ENTER"
    );
    const jsonData = await res.json();

    setMenu(jsonData.data);
  };

  if (menu === null) return <Shimmer />;

  const {
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
            <span className="mr-4 font-bold">
              {avgRatingString} + "(" +{totalRatingsString} + ")"
            </span>
          </div>
          <span className="text-sm font-bold">{"₹" + costForTwoMessage}</span>
        </div>
        <p className="text-sm text-red-400 font-bold">{cuisines.join(", ")}</p>
        <p className="text-sm">{locality}</p>
        <p className="text-sm">{sla.slaString}</p>
      </div>

      {cards.map((cat) => (
        <div className="mb-8">
          <h2 className="text-md font-bold mb-4">
            {cat?.card?.card?.title + "(" + itemLen + ")"}
          </h2>
          {itemCards.map((item) => (
            <div>
              <div className="flex justify-between items-center border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4">
                <div>
                  <h3>{item?.card?.info?.name}</h3>
                  <p className="mt-2 font-medium">
                    ₹{item?.card?.info?.price / 100}
                    {item?.card?.info?.itemAttribute?.vegClassifier
                      ? "🌱"
                      : "🍗"}
                  </p>
                  <p className="text-sm text-gray-700">
                    {item?.card?.info?.description}
                  </p>
                </div>
                <div className="w-auto">
                  <img
                    src={CDN_IMG + item?.card?.info?.imageId}
                    alt={item?.card?.info?.name}
                    className="w-30 h-20 object-cover"
                  />
                  {/* <button className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2 cursor-pointer">
                    Add
                  </button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
