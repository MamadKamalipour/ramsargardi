import "./assets/fontawesome/pro/css/all.css";
import React from "react";
import AppRoutes from "./Routes/AppRoutes";
// import "./styles/normalize.css";
// context
import ThemeContextProvider from "./context/ThemeContextProvider";

function App() {
  return (
    <ThemeContextProvider>
      <AppRoutes />
    </ThemeContextProvider>
  );
}

export default App;
