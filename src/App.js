import "./App.css";
import { Link, BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppCustomers from "./pages/AppCustomers";
import AppProducts from "./pages/AppProducts";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/customers">
            <AppCustomers />
          </Route>
          <Route path="/products">
            <AppProducts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
