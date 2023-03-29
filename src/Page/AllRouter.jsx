import React from "react";
import { Route, Routes } from "react-router-dom";
import CartForm from "./CartForm";
import CartCreate from "./CartCreate";
import EditCart from "./EditCart";

const AllRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CartForm />} />
        <Route path="/cart" element={<CartCreate />} />
        <Route path="/edit/:id" element={<EditCart />} />
      </Routes>
    </div>
  );
};

export default AllRouter;
