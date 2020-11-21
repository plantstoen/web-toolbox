import Header from "./components/Header.js";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Tool from "./pages/Tool";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tool">
          <Tool />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
