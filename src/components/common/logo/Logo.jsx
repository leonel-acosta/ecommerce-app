import MobelLogo from "../../../assets/images/logo.png";
import "./logo.css";

const Logo = () => {
  return (
    <>
      <a href="#">
        <img src={MobelLogo} alt="Möbel Logo" className="logo-navbar"></img>
      </a>
    </>
  );
};

export default Logo;
