import logo from './logo.svg';
import React from "react";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import ItemsList from './Components/itemsList'
import itemDetail from './Components/itemDetail'
const NoMatchRoute = () => <div>404 Page</div>;

function App() {
  return (
     <Router>
     <div>
       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
          <Route path="/" exact component={ItemsList} />
          <Route path="/product/:Id" exact component={itemDetail} />
          <Route component={NoMatchRoute} />
        </Switch>
     </div>
   </Router>
  );
}

export default App;
