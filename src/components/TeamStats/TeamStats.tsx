import "./TeamStats.scss";

const TeamStats = (): JSX.Element => {
  return (
    <div className="stats-card">
      <div className="stats-card__info">
        <p className="stats-card__info-number">1</p>
        <p>Esc</p>
        <p>Equipo 1</p>
      </div>
      <div className="stats-card__stats">
        <p>12</p>
        <p>5</p>
        <p>3</p>
      </div>
    </div>
  );
};

export default TeamStats;
