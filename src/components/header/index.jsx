import "./header.css";
import Logo from "../../assets/img/badiyat.png";
import person from "../../assets/img/person.png";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <NavLink to={"/"} className="header-logo-link">
            <img
              src={Logo}
              alt="logo"
              className="header-logo"
              width={138}
              height={48}
            />
          </NavLink>

          <div className="header-box">
            <nav className="header-nav">
              <ul className="header-list">
                <li className="header-item">
                  <NavLink to="/" className="header-item-link">
                    bosh saxifa
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/about" className="header-item-link">
                    nasr
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/media" className="header-item-link">
                    nazm
                  </NavLink>
                </li>
                <li className="header-item">
                  <NavLink to="/faq" className="header-item-link">
                    maqolalar
                  </NavLink>
                </li>
                <li className="header-item">
                  <img src={person} alt="" />
                  <select></select>
                </li>
              </ul>
              <li className="header-item">
                {" "}
                <NavLink to={"/contact"} className="header-item-link">
                  forum
                </NavLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};
