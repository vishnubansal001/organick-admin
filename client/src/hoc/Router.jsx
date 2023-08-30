import React from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import AddNews from "../pages/AddNewsPage/AddNews";
import AllNews from "../pages/AllNewsPage/AllNews";
import AddProducts from "../pages/AddProductsPage/AddProducts";
import AllProducts from "../pages/AllProductsPage/AllProducts";
import EditProductPage from "../pages/EditProductPage/EditProductPage";
import SignIn from "../pages/SignInPage/SignIn";
import AllUsers from "../pages/AllUsersPage/AllUsers";
import NotFound from "../pages/NotFoundPage/NotFound";
import PrivateRoute from "./PrivateRoute";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<LandingPage />} />
      </Route>
      <Route path="/add-news" element={<PrivateRoute />}>
        <Route exact path="/add-news" element={<AddNews />}></Route>
      </Route>
      <Route path="/all-news" element={<PrivateRoute />}>
        <Route exact path="/all-news" element={<AllNews />}></Route>
      </Route>
      <Route path="/all-users" element={<PrivateRoute />}>
        <Route exact path="/all-users" element={<AllUsers />}></Route>
      </Route>
      <Route path="/add-product" element={<PrivateRoute />}>
        <Route exact path="/add-product" element={<AddProducts />}></Route>
      </Route>
      <Route path="/all-products" element={<PrivateRoute />}>
        <Route exact path="/all-products" element={<AllProducts />}></Route>
      </Route>
      <Route path="/edit-product" element={<PrivateRoute />}>
        <Route exact path="/edit-product" element={<EditProductPage />}></Route>
      </Route>
      <Route exact path="/sign-in" element={<SignIn />}></Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
