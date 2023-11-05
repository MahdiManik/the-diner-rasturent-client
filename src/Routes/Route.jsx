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
import SingleFood from "../Pages/SingleFood";

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
        path: "blog",
        element: <Blog />,
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
        path: "single-food/:id",
        element: <SingleFood />,
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
