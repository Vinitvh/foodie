import image from "../assets/food.jpg";
import star from "../assets/star.png";

const Card = () => {
  return (
    <div className="w-xs h-96 mb-10 hover:border-1 rounded">
      <div className="p-1">
        <img src={image} alt="food" />
      </div>
      <div className="p-2">
        <h2 className="font-bold">Zozo Cafe</h2>
        <div className="flex align-middle justify-start">
          <img src={star} alt="rating" className="inline w-5 h-5 pr-1" />
          <span className="font-bold">4.4</span>
        </div>
        <p className="font-bold">40-45 mins</p>
        <p className="text-gray-700 font-medium">Fast Food, Pizzas,...</p>
        <p className="text-gray-700 font-medium">Jayanagar</p>
      </div>
    </div>
  );
};

export default Card;
