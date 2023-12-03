import { Box } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Navbar } from "./components";
import Router from "./Router";

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ backgroundColor: "#000" }}>
        <Navbar />
        <Router />
      </Box>
    </BrowserRouter>
  );
};

export default App;
