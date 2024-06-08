import "./League.scss";
import useFetch from "../../hooks/useFetch"
import { useContext } from "react";
import { AuthContext } from "../../App";

const LeagueComponent = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const API_URL_CREATE_MATCH = `${process.env.REACT_APP_API_URL as string}/match`;
  const [matches] = useFetch(API_URL_CREATE_MATCH, "POST", authInfo.userToken as string);

  return (
    <div className="league-page">
      <h3 className="league-page__content-title">LIGA</h3>
      <div className="league-page__btn-box" >
        <button className="league-page__btn-box--text" onSubmit={matches}>GENERAR LIGA</button>
      </div>
    </div>
  );
};

export default LeagueComponent;
