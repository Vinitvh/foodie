const menuData = [
  {
    id: 781328,
    restaurantName: "Tandoori Spice",
    location: "Delhi, India",
    avgRating: 4.2,
    costForTwo: "600 for two",
    cuisine: "Indian",
    slaString: "40-45 mins",
    categories: [
      {
        categoryName: "Starters",
        items: [
          {
            id: "101",
            name: "Paneer Tikka",
            description: "Grilled cottage cheese cubes marinated in spices.",
            price: 220,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/paneer_tikka.jpg",
          },
          {
            id: "102",
            name: "Chicken Malai Tikka",
            description: "Creamy chicken chunks grilled to perfection.",
            price: 280,
            currency: "INR",
            isVeg: false,
            image: "https://example.com/images/chicken_malai_tikka.jpg",
          },
        ],
      },
      {
        categoryName: "Main Course",
        items: [
          {
            id: "201",
            name: "Butter Chicken",
            description: "Tender chicken in rich tomato-based gravy.",
            price: 350,
            currency: "INR",
            isVeg: false,
            image: "https://example.com/images/butter_chicken.jpg",
          },
          {
            id: "202",
            name: "Dal Makhani",
            description: "Slow-cooked black lentils in butter and cream.",
            price: 180,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/dal_makhani.jpg",
          },
        ],
      },
      {
        categoryName: "Breads",
        items: [
          {
            id: "301",
            name: "Butter Naan",
            description: "Soft leavened bread with butter topping.",
            price: 40,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/butter_naan.jpg",
          },
          {
            id: "302",
            name: "Tandoori Roti",
            description: "Whole wheat flatbread cooked in a clay oven.",
            price: 30,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/tandoori_roti.jpg",
          },
        ],
      },
      {
        categoryName: "Desserts",
        items: [
          {
            id: "401",
            name: "Gulab Jamun",
            description:
              "Milk-solid balls soaked in rose-flavored sugar syrup.",
            price: 90,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/gulab_jamun.jpg",
          },
          {
            id: "402",
            name: "Rasgulla",
            description: "Soft spongy balls made from chhena in light syrup.",
            price: 80,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/rasgulla.jpg",
          },
        ],
      },
      {
        categoryName: "Beverages",
        items: [
          {
            id: "501",
            name: "Masala Chai",
            description: "Spiced Indian tea with milk.",
            price: 40,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/masala_chai.jpg",
          },
          {
            id: "502",
            name: "Lassi",
            description: "Sweet yogurt-based drink.",
            price: 60,
            currency: "INR",
            isVeg: true,
            image: "https://example.com/images/lassi.jpg",
          },
        ],
      },
    ],
  },
];

export default menuData;
