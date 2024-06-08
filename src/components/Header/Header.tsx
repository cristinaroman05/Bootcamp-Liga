import { useContext } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../App";

const Header = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  return (
    <header className="header">
      <NavLink to="/" className="header__title">
        <h1 className="header__title-text">| FOOTBALL MANAGER </h1>
      </NavLink>

      <div className="header__user-info">
        {authInfo?.userInfo ? (
          <>
            <span className="header__name">
              {" "}
              Hola {authInfo.userInfo.firstName},
            </span>
            <span className="header__logout" onClick={authInfo.logout}>
              salir
            </span>
          </>
        ) : (
          <NavLink to="/login">
            <button className="header__login">LOGIN / REGISTRO</button>
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
