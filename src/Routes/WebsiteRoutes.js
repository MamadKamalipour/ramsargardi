import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Page404 from "../AdminPanel/views/pages/page404/Page404";
import Layout from "../layout/Layout";
import AboutUs from "../Screen/AboutUs";
import FAQScreen from "../Screen/FAQScreen";
import HomeScrean from "../Screen/HomeScrean";

export default function WebsiteRoutes() {
  const location = useLocation();
  return (
    <Layout>
      <Routes>
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="faq" element={<FAQScreen />} />
        <Route path="/" element={<HomeScrean />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Layout>
  );
}
