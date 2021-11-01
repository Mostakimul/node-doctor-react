import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
