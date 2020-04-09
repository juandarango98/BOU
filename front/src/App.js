import React, { useState, useEffect } from "react";
import Navbar from "./Navbar.js";
import FormLogin from "./forms/FormLogin";
import FormRegister from "./forms/FormRegister";
import Logout from "./Logout";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ListStore from "./ListStore";
import './index.css';

const shops = [
 {
   "id": "187623",
   "name": "Nike",
   "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 },
 {
   "id": "12334",
   "name": "Zara",
   "handle": "richardkalehoff",
  "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 },
 {
   "id": "34534",
   "name": "Tyler McGinnis",
   "handle": "tylermcginnis",
   "imageURL": "https://images.app.goo.gl/YX7fYfogdzPQcLjSA"
 }
];

function App(props) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/getUser")
      .then((res) => res.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <Router>
      <div>
        <Navbar setUser={setUser} user={user}></Navbar>
        <ListStore shops= {shops} />
        <Switch>
          <Route path="/" exact component={() => <Home user={user} />} />
          <Route
            path="/login"
            component={() => <FormLogin user={user} setUser={setUser} />}
          />
          <Route
            path="/register"
            component={() => <FormRegister user={user} setUser={setUser} />}
          />
          <Route
            path="/logout"
            component={() => <Logout user={user} setUser={setUser} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;