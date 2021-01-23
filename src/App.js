import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "../src/pages/Search"
import NavBar from "../src/components/navbar"


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/" component={Search} />
      </div>
    </Router>
  );
}

export default App;
