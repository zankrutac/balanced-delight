import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import PlansPage from "./pages/Plans";
import PlanDetailsPage, {
  loader as planDetailsLoader,
} from "./pages/PlanDetailsPage";
import AboutUsPage from "./pages/AboutUs";
import FormPage from "./pages/Form";
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
        path: ":planId",
        element: <PlanDetailsPage />,
        // loader: planDetailsLoader,
      },
      {
        path: "aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "form",
        element: <FormPage />,
      },
      {
        path: "subscribe",
        element: <Subscribe />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
