import "./Matchups.scss";

const Matchups = (): JSX.Element => {
  return (
    <div className="matchups-card">
      <div className="matchups-card__info">
        <div className="matchups-card__info-team">
          <p>RMC</p>
          <p>ESC</p>
        </div>
        <div className="matchups-card__info-status">
          <p>NO DISPUTADO</p>
        </div>
        <div className="matchups-card__info-team">
          <p>ESC</p>
          <p>BCN</p>
        </div>
      </div>
    </div>
  );
};

export default Matchups;
