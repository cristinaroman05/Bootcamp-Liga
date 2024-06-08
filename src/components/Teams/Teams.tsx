import "./Teams.scss";
const TeamsComponent = (): JSX.Element => {
  return (
    <div className="teams-page">
      <h3 className="teams-page__title">EQUIPOS</h3>
      <table className="teams-page__table">
        <div className="teams-page__row-block">
          <tr className="teams-page__row-block-tr">
            <th className="teams-page__row-block--avatar"></th>
            <th className="teams-page__row-block--head">NOMBRE</th>
            <th className="teams-page__row-block--head">ALIAS</th>
            <th className="teams-page__row-block--head">DELEGADO</th>
            <th className="teams-page__row-block--btn"></th>
          </tr>
        </div>
        <div className="teams-page__row-block">
          <tr className="teams-page__row-block-tr">
            <td className="teams-page__row-block--avatar">
              <img className="teams-page__row-block--avatar-img"/>
            </td>
            <td className="teams-page__row-block--head">The Valley Club</td>
            <td className="teams-page__row-block--head">TVC</td>
            <td className="teams-page__row-block--head">Jorge Carlos Valle</td>
            <td className="teams-page__row-block--btn">
              <button className="teams-page__row-block--btn-edit">JUGADORES</button>
              <button className="teams-page__row-block--btn-edit">EDITAR</button>
              <button className="teams-page__row-block--btn-delete">ELIMINAR</button>
            </td>
          </tr>
        </div>
      </table>
    </div>
  );
};

export default TeamsComponent;
