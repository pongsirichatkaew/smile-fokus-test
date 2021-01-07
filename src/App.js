import { Switch, Route } from "react-router-dom";
import MainPage from "./pages/MemberPage";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Navbar />
        <MainPage />
      </Route>
      <Route path="*">
        <Navbar />
        <MainPage />
      </Route>
    </Switch>
  );
}

export default App;
