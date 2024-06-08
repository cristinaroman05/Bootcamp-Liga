import "./HomePage.scss";
import Header from "../../components/Header/Header";
import TeamStats from "../../components/TeamStats/TeamStats";
import Matchups from "../../components/Matchups/Matchups";

const HomePage = (): JSX.Element => {
  return (
    <div className="home-page">
      <Header />
      <div className="info-wrapper">
        <div className="card">
          <div className="card__header">
            <h1 className="card__title">CLASIFICACIÓN</h1>
            <div className="card__columns">
              <div className="card__columns-left">
                <p className="card__columns-left__pos">POS</p>
                <p>EQUIPO</p>
              </div>
              <div className="card__columns-right">
                <p>PTS</p>
                <p>PG</p>
                <p>PP</p>
              </div>
            </div>
          </div>
          <TeamStats />
        </div>
        <div className="card">
          <div className="card__header">
            <h1 className="card__title">PARTIDOS</h1>

            <div className="card__matchup">
              <p>Prev</p>
              <p className="card__matchup-title">JORNADA 1</p>
              <p>Next</p>
            </div>
          </div>
          <Matchups />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
