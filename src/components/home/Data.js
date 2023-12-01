import authorImage1 from "../../assets/Author1.jpg";
import authorImage2 from "../../assets/Author2.jpg";
import authorImage3 from "../../assets/Author3.jpg";

export const REASONS = [
  {
    number: "01",
    title: "Convenient Meal Delivery",
    description:
      "With Balanced Delights, you don’t have to worry about cooking or finding time to eat. We deliver delicious tiffin meals straight to your doorstep, saving you time and energy.",
  },
  {
    number: "02",
    title: "Affordable Pricing",
    description:
      "Our subscription box offers affordable meal options, ensuring that you get delicious and healthy food without breaking the bank.",
  },
  {
    number: "03",
    title: "Fresh & Healthy Food",
    description:
      "Our expert chefs use only the freshest ingredients to prepare homemade meals that are packed with flavor and nutrition.",
  },
  {
    number: "04",
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
    items: ["4 Roti", "1 Veg (12 oz)"],
    frequency: "Monthly",
    price: "CAD 149.99",
  },
  {
    id: "v2",
    type: "veg",
    name: "Regular",
    items: ["4 Roti", "1 Veg (12 oz)", "1 Curry (12 oz)"],
    frequency: "Monthly",
    price: "CAD 199.99",
  },
  {
    id: "v3",
    type: "veg",
    name: "Premium",
    items: ["4 Roti", "1 Veg (12 oz)", "1 Curry (12 oz)", "1 Rice (12 oz)"],
    frequency: "Monthly",
    price: "CAD 249.99",
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
      "1 dessert",
    ],
    frequency: "Monthly",
    price: "CAD 299.99",
  },
  {
    id: "nv1",
    type: "non-veg",
    name: "Basic",
    items: ["4 Roti", "1 Non-Veg (12 oz)"],
    frequency: "Monthly",
    price: "CAD 169.99",
  },
  {
    id: "nv2",
    type: "non-veg",
    name: "Regular",
    items: ["4 Roti", "1 Non-Veg (12 oz)", "1 Curry (12 oz)"],
    frequency: "Monthly",
    price: "CAD 219.99",
  },
  {
    id: "nv3",
    type: "non-veg",
    name: "Premium",
    items: ["4 Roti", "1 Non-Veg (12 oz)", "1 Curry (12 oz)", "1 Rice (12 oz)"],
    frequency: "Monthly",
    price: "CAD 269.99",
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
      "1 dessert",
    ],
    frequency: "Monthly",
    price: "CAD 319.99",
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

/////------------
// export const PLANS = {
//   veg: [
//     {
//       id: "v1",
//       type: "veg",
//       name: "Basic",
//       items: ["4 Roti", "1 Veg (12 oz)"],
//       frequency: "Monthly",
//       price: "CAD 149.99",
//     },
//     {
//       id: "v2",
//       planType: "veg",
//       planName: "Regular",
//       items: ["4 Roti", "1 Veg (12 oz)", "1 Curry (12 oz)"],
//       frequency: "Monthly",
//       price: "CAD 199.99",
//     },
//     {
//       id: "v3",
//       planType: "veg",
//       planName: "Premium",
//       items: ["4 Roti", "1 Veg (12 oz)", "1 Curry (12 oz)", "1 Rice (12 oz)"],
//       frequency: "Monthly",
//       price: "CAD 249.99",
//     },
//     {
//       id: "v4",
//       planType: "veg",
//       planName: "Deluxe",
//       items: [
//         "4 Roti",
//         "1 Veg (12 oz)",
//         "1 Curry (12 oz)",
//         "1 Rice (12 oz)",
//         "1 dessert",
//       ],
//       frequency: "Monthly",
//       price: "CAD 299.99",
//     },
//   ],

//   "non-veg": [
//     {
//       id: "nv1",
//       planType: "non-veg",
//       planName: "Basic",
//       items: ["4 Roti", "1 Non-Veg (12 oz)"],
//       frequency: "Monthly",
//       price: "CAD 169.99",
//     },
//     {
//       id: "nv2",
//       planType: "non-veg",
//       planName: "Regular",
//       items: ["4 Roti", "1 Non-Veg (12 oz)", "1 Curry (12 oz)"],
//       frequency: "Monthly",
//       price: "CAD 219.99",
//     },
//     {
//       id: "nv3",
//       planType: "non-veg",
//       planName: "Premium",
//       items: [
//         "4 Roti",
//         "1 Non-Veg (12 oz)",
//         "1 Curry (12 oz)",
//         "1 Rice (12 oz)",
//       ],
//       frequency: "Monthly",
//       price: "CAD 269.99",
//     },
//     {
//       id: "nv4",
//       planType: "non-veg",
//       planName: "Deluxe",
//       items: [
//         "4 Roti",
//         "1 Non-Veg (12 oz)",
//         "1 Curry (12 oz)",
//         "1 Rice (12 oz)",
//         "1 dessert",
//       ],
//       frequency: "Monthly",
//       price: "CAD 319.99",
//     },
//   ],
// };
