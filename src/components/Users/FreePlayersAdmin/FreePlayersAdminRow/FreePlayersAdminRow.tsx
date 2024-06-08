import { useContext } from "react";
import "./FreePlayersAdminRow.scss"
import { AuthContext } from "../../../../App";
// import HomeBanner from "../../assets/Home_banner.png";

const API_URL = `${process.env.REACT_APP_API_URL as string}/user`;

const FreePlayersAdminRow = (props: any): JSX.Element => {
  const authInfo = useContext(AuthContext);

  const includePlayer = (player: string): void => {
    const API_ADD = `${API_URL}/${player}`;

    const headers: any = {
      "Content-type": "application/json; charset=UTF-8",
      "Authorization": authInfo.userToken,
    };
    fetch(API_ADD, {
      method: "PUT",
      //   body: JSON.stringify({ team: null }),
      headers,
    })
      .then(async (data) => await data.json())
      .then((dataParsed) => {
        console.log("soy este", dataParsed)
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
        <td className="my-team__table-row-out"><button className="my-team__table-row-out--button" onClick={() => { includePlayer(props.player._id) }} type="button">AÑADIR</button></td>
      </tr>
    </div>
  );
};

export default FreePlayersAdminRow;
