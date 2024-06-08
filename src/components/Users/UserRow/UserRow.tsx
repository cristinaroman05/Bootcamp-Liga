import "./UserRow.scss"

const UserRow = (props: any): JSX.Element => {
  return (
    <div className="admin-user__row-block">
      <tr className="admin-user__row-block-tr">
        <td className="admin-user__table-row-photo">
          <img className="admin-user__table-row-photo-img"/>
        </td>
        <td className="admin-user__table-row">{props.user?.firstName}</td>
        <td className="admin-user__table-row">{props.user?.lastName}</td>
        <td className="admin-user__table-row">{props.user?.email}</td>
        <td className="admin-user__table-row">{props.user?.rol}</td>
        <td className="admin-user__table-row">
          <button className="admin-user__table-row-out--button-edit">EDITAR</button>
          <button className="admin-user__table-row-out--button-delete">ELIMINAR</button>
        </td>
      </tr>
    </div>
  );
};

export default UserRow;
