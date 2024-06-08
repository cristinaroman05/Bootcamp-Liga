
import "../AdminPage/AdminPage";
// React imports:
import { useState } from "react";
import Header from "../../components/Header/Header";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import User from "../../components/Users/User";
import TeamsComponent from "../../components/Teams/Teams";
import LeagueComponent from "../../components/League/League";

const AdminComponent = (): JSX.Element => {
  const [activeComponent, setActiveComponent] = useState("users"); // State to track active component

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const renderComponent = () => {
    if (activeComponent === "users") {
      return <User/>;
    } else if (activeComponent === "teams") {
      return <TeamsComponent />;
    } else if (activeComponent === "league") {
      return <LeagueComponent />;
    }
    return null;
  };

  return (
    <div className="admin-page">
      <Header />
      <div className="player-page__layout">
        <div className="player-page__profile-info">
          <ProfileInfo />
        </div>
        <div className="player-page__content">
          <div className="admin-page__nav">
            <button
              className={`admin-page__nav--btn ${activeComponent === "users" ? "active" : ""}`}
              onClick={() => {
                setActiveComponent("users");
              }}
            >
              USUARIOS
            </button>
            <button
              className={`admin-page__nav--btn ${activeComponent === "teams" ? "active" : ""}`}
              onClick={() => {
                setActiveComponent("teams");
              }}
            >
              EQUIPOS
            </button>
            <button
              className={`admin-page__nav--btn ${activeComponent === "league" ? "active" : ""}`}
              onClick={() => {
                setActiveComponent("league");
              }}
            >
              LIGA
            </button>
          </div>
          <div className="admin-page__content">{renderComponent()}</div>
        </div>
      </div>
    </div>
  );
};

export default AdminComponent;
