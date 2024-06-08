import "./ProfileInfo.scss";
import Emoji from "../../assets/mujer.png"
const ProfileInfo = (props: any): JSX.Element => {
  return (
    <div className="profile-info__profile-data">
      <img className="profile-info__img" src={Emoji} />
      <h3 className="profile-info__title">{props?.player?.firstName} {props?.player?.lastName}</h3>
      <p className="profile-info__subtitle">{props?.player?.rol}</p>
      <button className="profile-info__button">Editar Perfil</button>
    </div>
  );
};

export default ProfileInfo;
