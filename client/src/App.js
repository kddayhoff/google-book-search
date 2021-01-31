import React from "react";
//part of react - only using 3 components here - switch is like switch statement (if/else) - Router is the whole package, wrap whole app in router tags - route is individual routes || express for fronted html routes
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import BookSearch from "./Pages/BookSearch";
import SavedBooks from "./Pages/SavedBooks"
//bring pages in here so we can move between pages
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path = {["/", "/search"]}>
            {/* brought in from pages - components will be brought in to the pages themselves, not the app.js */}
            <BookSearch/>
          </Route>
          <Route exact path = "/saved-books">
            <SavedBooks/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
