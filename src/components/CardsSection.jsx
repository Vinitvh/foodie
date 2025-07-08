import Card from "./Card";
import resList from "../utils/mockData";
import { useState } from "react";

const CardsSection = () => {
  const [listOfRest, setListOfRest] = useState(resList);

  return (
    <>
      <div className="my-16">
        <h1 className="text-xl font-bold text-center">Restaurants</h1>
      </div>
      <div className="mx-24">
        <button
          type="button"
          className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={() => setListOfRest(resList)}
        >
          All Restaurants
        </button>
        <button
          type="button"
          className="text-white bg-emerald-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
          onClick={() => {
            const filteredList = listOfRest.filter(
              (item) => item?.card?.card?.info?.avgRating > 4
            );
            setListOfRest(filteredList);
          }}
        >
          Top Restaurants
        </button>
      </div>
      {/* Cards container */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full place-items-center ">
        {/* Card */}
        {listOfRest.map((item) => (
          <Card key={item?.card?.card?.info?.id} resData={item} />
        ))}
      </div>
    </>
  );
};

export default CardsSection;
