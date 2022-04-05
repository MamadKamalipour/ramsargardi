import "./assets/fontawesome/pro/css/all.css";
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
import Layout from "./layout/Layout";
// import "./styles/normalize.css";
// context
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <Layout>
        <AppRoutes />
      </Layout>
    </ThemeContextProvider>
  );
}

export default App;
