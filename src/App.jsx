import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import FormArea from "./components/content/formarea/FormArea";
import FormBali from "./components/content/formBali/FormBali";
import "./assets/theme.less";
import Home from "./components/content/home/Home";
import DataKader from "./components/dashboard/datakader/DataKader";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/dashboard" component={DataKader} />
        <Route path="/formpendaftaran" component={FormArea} />
        <Route path="/form-pendaftaran/:dpc" component={FormBali} />
        <Route path="/dpc-denpasar" component={FormBali} />
        <Route path="/:dpc" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
