import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home";
import App from "../App";
import Foods from "../Pages/Foods";
import Blog from "../Pages/Blog";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AddedAFood from "../Pages/ProfilePages/AddedAFood";
import MyAddedFoods from "../Pages/ProfilePages/MyAddedFoods";
import MyOrderFoods from "../Pages/ProfilePages/MyOrderFoods";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "foods",
        element: <Foods />,
      },
      {
        path: "added-a-food",
        element: <AddedAFood />,
      },
      {
        path: "my-added-foods",
        element: <MyAddedFoods />,
      },
      {
        path: "my-order-foods",
        element: <MyOrderFoods />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default routes;
