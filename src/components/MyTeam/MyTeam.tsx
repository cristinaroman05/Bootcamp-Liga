import "./MyTeam.scss";
import TeamRows from "../TeamRows/TeamRows";

const MyTeam = (props: any): JSX.Element => {
  return (
    <div className="my-team__team">
      <h3 className="my-team__content-title">MI EQUIPO</h3>
      <div className="my-team__table">
        <table>
          <div className="my-team__row-block">
            <tr className="my-team__row-block-tr">
              <th className="my-team__table-head-photo"></th>
              <th className="my-team__table-head-name">NOMBRE</th>
              <th className="my-team__table-head-lastname">APELLIDOS</th>
              <th className="my-team__table-head-email">EMAIL</th>
              <th className="my-team__table-head-role">ROL</th>
              <th className="my-team__table-head-out">SACAR DEL EQUIPO</th>
            </tr>
          </div>
          {props.players?.map((player: any) => {
            return <TeamRows key={player._id} player={player}></TeamRows>
          })}
        </table>
      </div>
    </div>
  );
};

export default MyTeam;
