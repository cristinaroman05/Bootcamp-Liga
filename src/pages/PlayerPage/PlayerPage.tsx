import "./PlayerPage.scss";
import { useContext } from "react";
import Header from "../../components/Header/Header";
import { AuthContext } from "../../App";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import useFetch from "../../hooks/useFetch";
import MyTeam from "../../components/MyTeam/MyTeam";

const API_URL_USER = `${process.env.REACT_APP_API_URL as string}/user`;
const API_URL_PLAYER = `${process.env.REACT_APP_API_URL as string}/team`;

const PlayerPage = (): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const [player] = useFetch(`${API_URL_USER}/${authInfo.userInfo?._id as string}`, "GET", authInfo.userToken as string);
  const [players] = useFetch(API_URL_PLAYER, "GET", authInfo.userToken as string);

  return (
    <div className="player-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo player={player}/>
        </div>
        <div className="player-page__content">
          <MyTeam players={players?.data?.name} />
        </div>
      </div>
    </div>
  );
};

export default PlayerPage;
