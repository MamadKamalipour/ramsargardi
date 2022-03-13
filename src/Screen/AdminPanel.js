import React from "react";
import { Provider } from "react-redux";
import store from "../AdminPanel/store";
import { Outlet } from "react-router-dom";
import ProductsContextProvider from "../AdminPanel/context/ProductsContextProvider";
import UserContextProvider from "../AdminPanel/context/UserContextProvider";

const AdminPanel = () => {
  return (
    <Provider store={store}>
      <UserContextProvider>
        <ProductsContextProvider>
          <Outlet />
        </ProductsContextProvider>
      </UserContextProvider>
    </Provider>
  );
};

export default AdminPanel;
