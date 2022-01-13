import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./routes/Home";
import Send from "./routes/Send";
import Friend from "./routes/Friend";
import Navbar from "./components/Navbar";
import Menu from "./routes/Menu";
function App() {
  return (
  <Router><Navbar/>
    <Switch>
      <Route path="/" exact={true} component={Home}>
      </Route>
      <Route path="/friend" component={Friend}>
      </Route>
      <Route path="/send" component={Send}>
      </Route>
      <Route path="/menu" component={Menu}>
      </Route>
    </Switch>
  </Router>);
}

export default App;
