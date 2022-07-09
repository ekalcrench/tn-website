import "./NavBarComponent.scss";
import { AccountPic } from "../../assets/imgs";

export default function NavBarComponent() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <div className="nav-bar-text">Hi, Eko Ichwan Ibrahim</div>
        <img src={AccountPic} alt="account" className="nav-bar-picture"/>
      </div>
    </div>
  );
}
