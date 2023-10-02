import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Posts from './components/Posts/Posts'
import PostBody from './components/PostBody/PostBody'
import Github from "./components/Github/Github";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About/>} />
      <Route path="posts" element={<Posts/>} />
      <Route path='posts/:postId' element={<PostBody />}/>
      <Route path='github' element={<Github />}/>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
