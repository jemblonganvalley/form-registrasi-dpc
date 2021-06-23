import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
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
        <Route path="/dashboard/:dpc" component={DataKader} />
        <Route path="/formpendaftaran" component={FormArea} />
        <Route path="/form-pendaftaran/:dpc" component={FormBali} />
        <Route path="/:kota/:dpc" component={Home} />
        <Route path="/">
          <Redirect to="/bali/kota-denpasar" />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
