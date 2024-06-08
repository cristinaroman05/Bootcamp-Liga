import { AuthContext } from "../../App";
import "./TeamRows.scss"
import { useContext } from "react";

const API_URL = `${process.env.REACT_APP_API_URL as string}/team`;

const TeamRows = (props: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  const deletePlayer = (player: string): void => {
    const API_DELETE = `${API_URL}/${player}`;

    const headers: any = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": authInfo.userToken,
    };
    fetch(API_DELETE, {
      method: "PUT",
      body: JSON.stringify({ team: null }),
      headers,
    })
      .then(async (data) => await data.json())
      .then((dataParsed) => {
      }).catch((error) => { console.error(error) });
  };
  return (
    <div className="my-team__row-block">
      <tr className="my-team__row-block-tr">
        <td className="my-team__table-row-photo"><img className="my-team__table-row-photo-img" src={props.player.logo} /></td>
        <td className="my-team__table-row-name">{props.player.firstName}</td>
        <td className="my-team__table-row-lastname">{props.player.lastName}</td>
        <td className="my-team__table-row-email">{props.player.email}</td>
        <td className="my-team__table-row-role">{props.player.rol}</td>
        <td className="my-team__table-row-out"><button className="my-team__table-row-out--button" onClick={() => { deletePlayer(props.player._id) } } type="button">ELIMINAR</button></td>
      </tr>
    </div>
  );
};

export default TeamRows;
