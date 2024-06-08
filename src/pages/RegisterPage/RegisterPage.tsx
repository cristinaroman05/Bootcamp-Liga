import { useRef } from "react";
import Header from "../../components/Header/Header";
import "./RegisterPage.scss";
import {} from "../../App";
import { useNavigate } from "react-router-dom";

interface RegisterInfo {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const RegisterPage = (): JSX.Element => {
  const API_URL_REGISTER = `${process.env.REACT_APP_API_URL as string}/user/register`;
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const submitForm = (event: React.FormEvent): void => {
    event.preventDefault();

    const registerInfo: RegisterInfo = {
      email: emailRef?.current?.value as string,
      password: passwordRef?.current?.value as string,
      firstName: firstNameRef?.current?.value as string,
      lastName: lastNameRef?.current?.value as string,
    };

    if (!registerInfo.email || !registerInfo.password || !registerInfo.firstName || !registerInfo.lastName) {
      alert("Todos los campos son obligatorios!");
    } else {
      doRegisterRequest(registerInfo);
    }
  };

  const doRegisterRequest = (registerInfo: RegisterInfo): void => {
    console.log(API_URL_REGISTER)
    fetch(API_URL_REGISTER, {
      method: "POST",
      body: JSON.stringify(registerInfo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then(async (response) => {
        if (response.status !== 201) {
          alert("Registro incorrecto");
        }
        return await response.json();
      })
      .then((data) => {
        console.log(data);
        // Register OK -> Guardamos las credenciales

        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        alert("Ha ocurrido un error en la petición");
      });
  };

  return (
    <div className="register-page page">
      <div>
        <Header />
        <div className="register-page__container">
          <div>
            <p className="register-page__welcome">BIENVENIDO</p>
            <p className="register-page__title">SIGN IN</p>
            <p className="register-page__subtitle">Introduce tus credenciales para acceder</p>
            {/* <button>Log out</button> */}
          </div>
          <form onSubmit={submitForm} className="register-page__form">
            <label className="register-page__label register-page__form--label" htmlFor="email">
              Email:
            </label>
            <input className="register-page__input" ref={emailRef} type="text" id="email" />

            <label className="register-page__label register-page__form--label" htmlFor="password">
              Password:
            </label>
            <input className="register-page__input" ref={passwordRef} type="text" id="password" />

            <label className="register-page__label register-page__form--label" htmlFor="password">
              Nombre
            </label>
            <input className="register-page__input" ref={firstNameRef} type="text" id="firstName" />

            <label className="register-page__label register-page__form--label" htmlFor="password">
              Apellidos
            </label>
            <input className="register-page__input" ref={lastNameRef} type="text" id="lastName" />

            <button className="register-page__form btn--green" type="submit">
              REGISTRARSE
            </button>
            <button
              className="register-page__form btn"
              type="button"
              onClick={() => {
                navigate("/login");
              }}
            >
              INICIAR SESIÓN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
