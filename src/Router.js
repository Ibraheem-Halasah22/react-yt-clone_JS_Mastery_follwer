import React from "react";
import { Route, Routes } from "react-router-dom";
import { Feed, VideoDetail, ChannelDetail, SearchFeed } from "./pages";

const Router = () => {
  return (
    <Routes>
      <Route path="/" exact element={<Feed />} />
      <Route path="/video/:id" element={<VideoDetail />} />
      <Route path="/channel/:id" element={<ChannelDetail />} />
      <Route path="/search/:searchTerm" element={<SearchFeed />} />
    </Routes>
  );
};

export default Router;
