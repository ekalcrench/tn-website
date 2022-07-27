import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { SideMenuComponent } from "../components/side-menu";
import routes from "../routes";
import { NavBarComponent } from "../components/nav-bar";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBarComponent />
        <div className="app-container-down">
          <SideMenuComponent />
          {routes}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
