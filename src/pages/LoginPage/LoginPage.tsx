import { useContext, useRef } from "react";
import Header from "../../components/Header/Header";
import "./LoginPage.scss";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

interface LoginInfo {
  email: string;
  password: string;
}

const LoginPage = (): JSX.Element => {
  const API_URL_LOGIN = `${process.env.REACT_APP_API_URL as string}/user/login`;
  const authInfo = useContext(AuthContext);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const loginInfo: LoginInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
    };

    if (!loginInfo.email || !loginInfo.password) {
      alert("Email y la contraseña son obligatorios!");
    } else {
      doLoginRequest(loginInfo);
    }
  };

  const doLoginRequest = (loginInfo: LoginInfo): void => {
    fetch(API_URL_LOGIN, {
      method: "POST",
      body: JSON.stringify(loginInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(async (response) => {
        if (response.status !== 200) {
          alert("Login incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        // Login OK -> redirige segun rol.
        console.log(data)
        console.log(authInfo)
        if (data.token && data.user && authInfo.login) {
          authInfo.login(data.token, data.user);
          navigate(data.user.rol === "ADMIN" ? "/personal-area/admin" : data.user.rol === "MANAGER" ? "/personal-area/manager" : "/user");
        }
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="login-page">
      <Header />
      <div>
        <div className="login-page__container">
          <div>
            <p className="login-page__welcome">BIENVENIDO</p>
            <p className="login-page__title">SIGN IN</p>
            <p className="login-page__subtitle">Introduce tus credenciales para acceder</p>
          </div>

          <form onSubmit={submitForm} className="login-page__form">
            <label className="login-page__label login-page__form--label" htmlFor="email">
              Email:
            </label>
            <input className="login-page__input" ref={emailRef} type="text" id="email" />

            <label className="login-page__label login-page__form--label" htmlFor="password">
              Password:
            </label>
            <input className="login-page__input" ref={passwordRef} type="text" id="password" />

            <button className="login-page__form btn--green" type="submit">
              ACCEDER
            </button>
            <button
              className="login-page__form btn"
              type="button"
              onClick={() => {
                navigate("/register");
              }}
            >
              REGISTRARSE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
