import Card from "./Card";

const CardsSection = () => {
  return (
    <>
      <div className="my-16">
        <h1 className="text-xl font-bold text-center">Restaurants</h1>
      </div>
      {/* Cards container */}
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full place-items-center ">
        {/* Card */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default CardsSection;
