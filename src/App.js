import "./App.scss";
import { Home } from "./pages";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Routes from "./routes";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes />
      </div>
    </Router>
  );
}

export default App;
