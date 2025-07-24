import { CDN_IMG } from "../utils/constants";

const Banner = ({ data }) => {
  //   console.log(data?.card?.card?.imageGridCards?.info[0]?.action?.text);
  const bannerRes = data?.card?.card?.imageGridCards?.info;

  return (
    <>
      <h1 className="font-bold text-start mx-30 text-xl mt-20 mb-4">
        What's on your mind?
      </h1>
      <div className="flex flex-wrap gap-4 mx-28">
        {bannerRes.map((res) => (
          <div className="" key={res?.id}>
            <img
              src={CDN_IMG + res?.imageId}
              alt={res?.action?.text}
              className="w-32"
            />
          </div>
        ))}
      </div>
      <div className="w-11/12 mx-auto h-1 bg-gray-200 rounded my-8"></div>
    </>
  );
};

export default Banner;
