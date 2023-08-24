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

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />}></Route>
      <Route exact path="/add-news" element={<AddNews />}></Route>
      <Route exact path="/all-news" element={<AllNews />}></Route>
      <Route exact path="/all-users" element={<AllUsers />}></Route>
      <Route exact path="/add-product" element={<AddProducts />}></Route>
      <Route exact path="/all-products" element={<AllProducts />}></Route>
      <Route exact path="/edit-product" element={<EditProductPage />}></Route>
      <Route exact path="/sign-in" element={<SignIn />}></Route>
    </Routes>
  );
};

export default Router;
