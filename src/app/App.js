import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { SideMenuComponent } from "../components/side-menu";
import routes from "../routes";

function App() {
  return (
    <div>
      <SideMenuComponent />
      <BrowserRouter>
        {routes}
      </BrowserRouter>
    </div>
  );
}

export default App;
