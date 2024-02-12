import authorImage1 from "./assets/Author1.jpg";
import authorImage2 from "./assets/Author2.jpg";
import authorImage3 from "./assets/Author3.jpg";
import affordablePricing from "./assets/affordable-pricing.png";
import freshDelivery from "./assets/fresh-delivery.png";
import studentDiscount from "./assets/student-discount.png";
import convenientDelivery from "./assets/convenient-delivery.png";
import veg1 from "./assets/veg-1.png";

export const REASONS = [
  {
    number: "01",
    image: convenientDelivery,
    title: "Convenient Meal Delivery",
    description:
      "With Balanced Delights, you don’t have to worry about cooking or finding time to eat. We deliver delicious tiffin meals straight to your doorstep, saving you time and energy.",
  },
  {
    number: "02",
    image: affordablePricing,
    title: "Affordable Pricing",
    description:
      "Our subscription box offers affordable meal options, ensuring that you get delicious and healthy food without breaking the bank.",
  },
  {
    number: "03",
    image: freshDelivery,
    title: "Fresh & Healthy Food",
    description:
      "Our expert chefs use only the freshest ingredients to prepare homemade meals that are packed with flavor and nutrition.",
  },
  {
    number: "04",
    image: studentDiscount,
    title: "Special Discount for Students",
    description:
      "We offer a special discount for students, ensuring that they can enjoy delicious and healthy meals without worrying about the cost.",
  },
];

export const PLANS = [
  {
    id: "v1",
    type: "veg",
    name: "Basic",
    items: ["4 Roti", "1 Veg (8 oz)"],
    frequency: "Monthly",
    price: 119.99,
    description: [
      "Regular containers are 8oz or 250ml approx. Sufficient for 1 person to consume it for 1 time a day.",
    ],
    image: veg1,
  },
  {
    id: "v2",
    type: "veg",
    name: "Regular",
    items: ["4 Roti", "1 Veg (8 oz)", "1 Curry (8 oz)", "1 Rice (8 oz)"],
    frequency: "Monthly",
    price: 199.99,
    description: [
      "Regular containers are 8oz or 250ml approx. Sufficient for 1 person to consume it for 1 time a day.",
    ],
    image: veg1,
  },
  {
    id: "v3",
    type: "veg",
    name: "Large",
    items: [
      "4 Roti",
      "1 Veg (12 oz)",
      "1 Curry (12 oz)",
      "1 Rice (12 oz)",
      "1 side salad",
    ],

    frequency: "Monthly",
    price: 249.99,
    description: [
      "Large Containers are of 12oz OR 350ml approx. and are bigger than Regular Meal.",
      "Sufficient for 1 person to consume it for 2 times a day OR 2 persons for 1 time  depending on an individual diet",
    ],
    image: veg1,
  },
  {
    id: "v4",
    type: "veg",
    name: "Deluxe",
    items: [
      "4 Roti",
      "1 Veg (12 oz)",
      "1 Curry (12 oz)",
      "1 Rice (12 oz)",
      "1 side salad",
      "1 dessert",
    ],
    frequency: "Monthly",
    price: 299.99,
    description: [
      "Large Containers are of 12oz OR 350ml approx. and are bigger than Regular Meal.",
      "Sufficient for 1 person to consume it for 2 times a day OR 2 persons for 1 time  depending on an individual diet",
    ],
    image: veg1,
  },
  {
    id: "nv1",
    type: "non-veg",
    name: "Basic",
    items: ["4 Roti", "1 Non-Veg (8 oz)"],
    frequency: "Monthly",
    price: 139.99,
    description: [
      "Regular containers are 8oz or 250ml approx. Sufficient for 1 person to consume it for 1 time a day.",
    ],
    image: veg1,
  },
  {
    id: "nv2",
    type: "non-veg",
    name: "Regular",
    items: ["4 Roti", "1 Non-Veg (8 oz)", "1 Curry (8 oz)"],
    frequency: "Monthly",
    price: 219.99,
    description: [
      "Regular containers are 8oz or 250ml approx. Sufficient for 1 person to consume it for 1 time a day.",
    ],
    image: veg1,
  },
  {
    id: "nv3",
    type: "non-veg",
    name: "Large",
    items: [
      "4 Roti",
      "1 Non-Veg (12 oz)",
      "1 Curry (12 oz)",
      "1 Rice (12 oz)",
      "1 side salad",
    ],
    frequency: "Monthly",
    price: 269.99,
    description: [
      "Large Containers are of 12oz OR 350ml approx. and are bigger than Regular Meal.",
      "Sufficient for 1 person to consume it for 2 times a day OR 2 persons for 1 time  depending on an individual diet",
    ],
    image: veg1,
  },
  {
    id: "nv4",
    type: "non-veg",
    name: "Deluxe",
    items: [
      "4 Roti",
      "1 Non-Veg (12 oz)",
      "1 Curry (12 oz)",
      "1 Rice (12 oz)",
      "1 side salad",
      "1 dessert",
    ],
    frequency: "Monthly",
    price: 319.99,
    description: [
      "Large Containers are of 12oz OR 350ml approx. and are bigger than Regular Meal.",
      "Sufficient for 1 person to consume it for 2 times a day OR 2 persons for 1 time  depending on an individual diet",
    ],
    image: veg1,
  },
];

export const REVIEWS = [
  {
    review:
      "HomeFood has made my life so much easier. I don't have to worry about cooking or finding time to eat. Their meals are delicious and healthy, and the delivery is always on time.",
    img: authorImage1,
    name: "Ananya Sharma",
  },
  {
    review:
      "I'm a student on a tight budget, and HomeFood's special discount has been a lifesaver. Their meals are affordable and tasty, and I don't have to worry about cooking.",
    img: authorImage2,
    name: "Priya Patel",
  },
  {
    review:
      "I love the convenience of HomeFood's meal delivery service. The food is always fresh and healthy, and I don't have to worry about finding time to eat during my busy workday.",
    img: authorImage3,
    name: "Rohan Singh",
  },
];
