import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./components/content/home/Home";
import Navbar from "./components/navbar/Navbar";
import FormArea from "./components/content/formarea/FormArea";
import "./assets/theme.less";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/formpendaftaran" component={FormArea} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
