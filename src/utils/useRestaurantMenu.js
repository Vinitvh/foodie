import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [menu, setMenu] = useState(null);
  useEffect(() => {
    const fetchMenu = async () => {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const jsonData = await res.json();

      setMenu(jsonData?.data);
    };
    if (resId) fetchMenu();
  }, []);
  return menu;
};
export default useRestaurantMenu;
