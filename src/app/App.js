import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { SideMenuComponent } from "../components/side-menu";
import routes from "../routes";
import { NavBarComponent } from "../components/nav-bar";

function App() {
  return (
    <div className="app-container">
      <SideMenuComponent />
      <div className="app-container-right">
        <NavBarComponent />
        <BrowserRouter>{routes}</BrowserRouter>
      </div>
    </div>
  );
}

export default App;
