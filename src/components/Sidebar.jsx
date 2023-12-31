import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const selectedCategory = "New";
const isSelectedCategory = (category) => category.name === selectedCategory;

const Sidebar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        key={category.name}
        className="category-btn"
        style={{
          background: isSelectedCategory(category) && "#FC1503",
          color: "white",
        }}
      >
        <span
          style={{
            color: isSelectedCategory(category) ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {category.icon}
        </span>
        <span style={{ opacity: isSelectedCategory(category) ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;
