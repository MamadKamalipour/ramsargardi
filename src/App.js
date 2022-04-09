import "./assets/fontawesome/pro/css/all.css";
import React from "react";

// context
import ThemeContextProvider from "./context/ThemeContextProvider";
import VilaContextProvider from "./context/VilaContextProvider";
// Routes
import WebsiteRoutes from "./Routes/WebsiteRoutes";
import PanelRoutes from "./Routes/PanelRoutes";
import { Route, Routes } from "react-router-dom";

function App() {

  return (
    <ThemeContextProvider>
      <VilaContextProvider>
        <Routes>
          <Route path="/*" element={<WebsiteRoutes />} />
          <Route path="/administrator/*" element={<PanelRoutes />} />
        </Routes>
      </VilaContextProvider>
    </ThemeContextProvider>
  );
}

export default App;
