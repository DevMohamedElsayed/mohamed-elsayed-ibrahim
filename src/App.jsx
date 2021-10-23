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
  );
};
