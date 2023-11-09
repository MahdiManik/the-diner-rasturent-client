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
import PurchaseFood from "../Pages/PurchaseFood";
import Banner from "../Pages/Banner";
import PrivateRoute from "./PrivateRoute";
import Menus from "../Pages/Menus/Menus";
import Comment from "../Pages/Comment";

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
        path: "banner",
        element: <Banner />,
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
        path: "menus",
        element: <Menus />,
      },
      {
        path: "added-a-food",
        element: (
          <PrivateRoute>
            <AddedAFood />
          </PrivateRoute>
        ),
      },
      {
        path: "my-added-foods",
        element: (
          <PrivateRoute>
            <MyAddedFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "my-order-foods",
        element: (
          <PrivateRoute>
            <MyOrderFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "single-food/:id",
        element: (
          <PrivateRoute>
            <SingleFood />
          </PrivateRoute>
        ),
      },
      {
        path: "comment",
        element: (
          <PrivateRoute>
            <Comment />
          </PrivateRoute>
        ),
      },
      {
        path: "purchase/:id",
        element: (
          <PrivateRoute>
            <PurchaseFood />
          </PrivateRoute>
        ),
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
