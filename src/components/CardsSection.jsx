import Card from "./Card";
import resList from "../utils/mockData";

const CardsSection = () => {
  return (
    <>
      <div className="my-16">
        <h1 className="text-xl font-bold text-center">Restaurants</h1>
      </div>
      {/* Cards container */}
      <div className="grid xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full place-items-center ">
        {/* Card */}
        {resList.map((item) => (
          <Card key={item.card.card.info.id} resData={item} />
        ))}
        {/* <Card resData={resList} /> */}
      </div>
    </>
  );
};

export default CardsSection;
