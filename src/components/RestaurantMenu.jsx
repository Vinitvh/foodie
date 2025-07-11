import menuData from "../utils/menuData";
import starImage from "../assets/star.png";

const RestaurantMenu = () => {
  const menu = menuData;

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h3 className="text-2xl font-bold">{menu[0].restaurantName}</h3>
      <div className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4">
        <div className="flex items-center">
          <div className="flex ">
            <img src={starImage} alt="rating" className="inline w-5 h-5 pr-1" />
            <span className="mr-4 font-bold">{menu[0].avgRating}</span>
          </div>
          <span className="text-sm font-bold">{"₹" + menu[0].costForTwo}</span>
        </div>
        <p className="text-sm text-red-400 font-bold">{menu[0].cuisine}</p>
        <p className="text-sm">{menu[0].location}</p>
        <p className="text-sm">{menu[0].slaString}</p>
      </div>

      {menu[0].categories.map((cat) => (
        <div key={cat.categoryName} className="mb-8">
          <h2 className="text-md font-bold mb-4">{cat.categoryName}</h2>
          <div>
            {cat.items.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 my-4"
              >
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
                <p className="mt-2 font-medium">
                  ₹{item.price} {item.isVeg ? "🌱" : "🍗"}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
