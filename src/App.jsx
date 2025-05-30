import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Blogpost from "./pages/Blogpost";
import Video from "./pages/Video";
import Contact from "./pages/Contact";

export default function App() {
  return <React.Fragment>
    <Header />
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/blog" element={<Blog/> } />
      <Route path="/blogpost" element={<Blogpost/> } />
      <Route path="/video" element={<Video/> } />
      <Route path="/contact" element={<Contact/> } />
    </Routes>
    <Footer/>
  </React.Fragment>;
}
