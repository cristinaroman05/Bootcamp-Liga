import "./FreePlayersAdmin.scss";
const FreePlayersAdmin = (props: any): JSX.Element => {
  return (
    <div className="free-players__team">
      <h3 className="free-players__content-title">SIN EQUIPO</h3>
      <div className="free-players__table">
        <table>
          <div className="free-players__row-block">
            <tr className="free-players__row-block-tr">
              <th className="free-players__table-head-photo"></th>
              <th className="free-players__table-head-name">NOMBRE</th>
              <th className="free-players__table-head-lastname">APELLIDOS</th>
              <th className="free-players__table-head-email">EMAIL</th>
              <th className="free-players__table-head-role">ROL</th>
              <th className="free-players__table-head-out">AÑADIR AL EQUIPO</th>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
};
export default FreePlayersAdmin;
