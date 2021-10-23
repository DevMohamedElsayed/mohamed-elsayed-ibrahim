<<<<<<< HEAD
import { Route, Redirect, Switch } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import {Contact} from "./pages/Contact.jsx"
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Route path="/users">
            <Users />
          </Route>

          <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Redirect to="/posts" />
          </Route>
        </Switch>
      </div>
    </>
=======
import { useState, useEffect } from "react";
import axios from "axios";
import { ViewPosts } from "./components/ViewPosts";
import { AddPost } from "./components/AddPost";

export const App = () => {
  const [posts, setPosts] = useState([]);

 

  const handleDelete = () => {
    setPosts([]);
  };

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <AddPost addPost={addPost} />
        </div>
        <div className="col-6">
          <ViewPosts
            posts={posts}
            onDelete={handleDelete}
          />
        </div>
      </div>
    </div>
>>>>>>> c53461532b6411ea9bbe32a7c9f2d703ead78a11
  );
};
