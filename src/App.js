import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PlansPage from "./pages/Plans";
import AboutUsPage from "./pages/AboutUs";
import Subscribe from "./pages/Subscribe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "plans",
        element: <PlansPage />,
      },

      {
        path: "about-us",
        element: <AboutUsPage />,
      },

      {
        path: "subscribe/:planId",
        element: <Subscribe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
