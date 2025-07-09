import star from "../assets/star.png";
import { CDN_IMG } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, locality, cuisines, avgRating, sla } =
    resData?.card?.card?.info || {};
  return (
    <div className="w-72 h-[350px] mb-10 rounded shadow-sm border border-transparent transition-all duration-200 ease-in-out hover:scale-[1.03] hover:shadow-md hover:border-gray-300">
      <div className="h-48 w-full p-1">
        <img
          src={CDN_IMG + cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-2 text-pretty">
        <h2 className="font-bold">{name}</h2>
        <div className="flex align-middle justify-start">
          <img src={star} alt="rating" className="inline w-5 h-5 pr-1" />
          <span className="font-bold">{avgRating.toFixed(1)}</span>
        </div>
        <p className="font-bold">{sla.slaString}</p>
        <p className="text-gray-700 text-sm font-medium truncate">
          {cuisines.join(",")}
        </p>
        <p className="text-gray-800 font-medium">{locality}</p>
      </div>
    </div>
  );
};

export default Card;
