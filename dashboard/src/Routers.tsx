import React from "react";
import { Navigate, Route, Routes } from "react-router";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ForgotPassword from "./pages/auth/ForgotPassword";
import AppLayout from "./layouts/AppLayout";
import Dashboard from "./pages/Dashboard";
import Books from "./pages/Books";
import BookDetails from "./pages/BookDetails";
import Authors from "./pages/Authors";
import AuthorDetails from "./pages/AuthorDetails";
import Borrows from "./pages/Borrows";
import BorrowDetails from "./pages/BorrowDetails";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Users from "./pages/Users";
import UserDetails from "./pages/UserDetails";
import Categories from "./pages/Categories";
import CategoryDetails from "./pages/CategoryDetails";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";
import Unauthorized from "./pages/Unauthorized";
import NotFound from "./pages/NotFound";

export default function Routers() {
  return (
    <Routes>
      {/* Auth routes */}
      <Route path="/auth" element={<AuthLayout />}>
        <Route index element={<Navigate to={"/auth/login"} />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Route>

      {/* App Routes */}
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="books" element={<Books />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="authors" element={<Authors />} />
        <Route path="authors/:id" element={<AuthorDetails />} />
        <Route path="borrowings" element={<Borrows />} />
        <Route path="borrowings/:id" element={<BorrowDetails />} />
        <Route path="orders" element={<Orders />} />
        <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="users" element={<Users />} />
        <Route path="users/:id" element={<UserDetails />} />
        <Route path="categories" element={<Categories />} />
        <Route path="categories/:id" element={<CategoryDetails />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
        <Route path="profile" element={<Profile />} />
      </Route>

      {/* Control Routes */}
      <Route path="unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
