import React, { Suspense } from "react";
import { Provider } from "react-redux";
import store from "../AdminPanel/store";
import { Route, Routes , Outlet } from "react-router-dom";


const AdminPanel = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

export default AdminPanel;
