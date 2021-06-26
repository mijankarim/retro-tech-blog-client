import { useState, createContext } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import SinglePost from './components/SinglePost/SinglePost';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AddBlog from './components/AddBlog/AddBlog';
import ManageBlogs from './components/ManageBlogs/ManageBlogs';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>

        <Route exact path="/">
          <Home/>
        </Route>

        <Route exact path="/admin">
          <Admin/>
        </Route>

        <Route exact path="/blog/:id">
          <SinglePost/>
          </Route>
          
        <Route path="/login">
            <Login />
          </Route>
          
          <PrivateRoute path="/addBlog">
            <AddBlog/>
          </PrivateRoute>

          <PrivateRoute path="/manageBlogs">
            <ManageBlogs/>
          </PrivateRoute>


      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
