import "./User.scss";
import useFetch from "../../hooks/useFetch";
import UserRow from "./UserRow/UserRow";
import { useContext } from "react";
import { AuthContext } from "../../App";
import FreePlayersAdmin from "./FreePlayersAdmin/FreePlayersAdmin";

const API_URL = `${process.env.REACT_APP_API_URL as string}/user`;
const User = (props: any): JSX.Element => {
  const authInfo = useContext(AuthContext);
  const data: any = useFetch(API_URL, "GET", authInfo.userToken as string);
  console.log(data);
  return (
    <div className="admin-user">
      <h3 className="admin-user__content-title">USUARIOS</h3>
      <table className="admin-user__table">
        <div className="admin-user__row-block">
          <tr className="admin-user__row-block-tr">
            <th className="admin-user__table-head">NOMBRE</th>
            <th className="admin-user__table-head">APELLIDOS</th>
            <th className="admin-user__table-head">EMAIL</th>
            <th className="admin-user__table-head">ROL</th>
          </tr>
        </div>
        {data.map((user: any) => {
          return <UserRow key={data?.userWithTeam?._id} user={user}></UserRow>
        })}
      </table>
      <FreePlayersAdmin data={data}></FreePlayersAdmin>
    </div>
  );
};

export default User;
