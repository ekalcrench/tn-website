import "./NavBarComponent.scss";
import { AccountPic, LogoTN } from "../../assets/imgs";
import {KotakEmpat} from "../../assets/icons"

export default function NavBarComponent() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-left">
        <img src={LogoTN} alt="logo-tn" className="logo-tn"/>
        <img src={KotakEmpat} alt="kotak-empat" className="kotak-empat"/>
      </div>
      <div className="nav-bar-right">
        <img src={AccountPic} alt="account" className="profile"/>
      </div>
    </div>
  );
}
