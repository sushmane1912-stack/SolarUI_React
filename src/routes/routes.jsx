import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

const Home = lazy(() => import("../pages/Home/Home"));
const Content = lazy(() => import("../pages/Content/Content"));
const About = lazy(() => import("../pages/About/About"));
const Enquiry = lazy(() => import("../pages/Enquiry/Enquiry"));
const Login = lazy(() => import("../pages/Auth/Login/Login"));
const Register = lazy(() => import("../pages/Auth/Register/Register"));
const AdminEnquiries = lazy(() => import("../pages/Admin/Enquiries/Enquiries"));
const EnquiryDetails = lazy(
  () => import("../pages/Admin/EnquiryDetails/EnquiryDetails"),
);

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/content" element={<Content />} />
    <Route path="/about" element={<About />} />
    <Route path="/enquiry" element={<Enquiry />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />

    {/* 🔒 Protected admin route */}
    <Route
      path="/admin/enquiries"
      element={
        <PrivateRoute>
          <AdminEnquiries />
        </PrivateRoute>
      }
    />

    <Route
      path="/admin/enquiry_details/:id"
      element={
        <PrivateRoute>
          <EnquiryDetails />
        </PrivateRoute>
      }
    />

    <Route
      path="/admin/profile/:id"
      element={
        <PrivateRoute>
          <EnquiryDetails />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<div>404 Not Found</div>} />
  </Routes>
);

export default AppRoutes;
