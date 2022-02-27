import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
const AdminPanel = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="theme" data-scheme={theme}>
        this is admin panel
    </div>
  );
};

export default AdminPanel;
