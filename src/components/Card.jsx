import star from "../assets/star.png";
import { CDN_IMG } from "../utils/constants";

const Card = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, locality, cuisines, avgRating, sla } =
    resData?.card?.card?.info || {};
  return (
    <div className="w-xs mb-10 hover:border-1 rounded">
      <div className="p-1">
        <img
          src={CDN_IMG + cloudinaryImageId}
          alt={name}
          className="w-xs h-48"
        />
      </div>
      <div className="p-2 text-pretty">
        <h2 className="font-bold">{name}</h2>
        <div className="flex align-middle justify-start">
          <img src={star} alt="rating" className="inline w-5 h-5 pr-1" />
          <span className="font-bold">{avgRating}</span>
        </div>
        {/* <p className="font-bold">{sla.slaString}</p> */}
        <p className="text-gray-700 text-sm font-medium break-words">
          {cuisines.join(",")}
        </p>
        <p className="text-gray-800 font-medium">{locality}</p>
      </div>
    </div>
  );
};

export default Card;
