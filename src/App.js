import "./styles.css";
import { createStore } from "redux";
import counterReducer from "./reducer/reducer";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";

export default function App() {
  let store = createStore(counterReducer);

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/addContact">
            <AddContact></AddContact>
          </Route>
          <Route path="/editContact/:id">
            <EditContact></EditContact>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}
