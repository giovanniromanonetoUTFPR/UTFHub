import { NavDropdown } from "react-bootstrap";
import { FaSistrix } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import User from "../../assets/images/user.svg";
import "./styles.css";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isAdmin = useSelector((state) => state.userAdmin);

  function fazerLogout() {
    dispatch({
      type: "LOGOUT",
      usuarioLogado: 0,
    });
    history.push("/");
  }

  return (
    <header className="header">
      <div className="conteudo-header">
        <Link to="/home">Home</Link>
        <Link to="/materias">Matérias</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/about">Contato</Link>
        {isAdmin ? (
          <Link to="/admin">Admin</Link>
        ) : null}
        <Link to="/materias">
          <FaSistrix size={33} />
        </Link>
        <ReactSVG
          src={User}
          alt="Ícone de usuário"
          className="header-user-img"
          onClick={()=> history.push('/userProfile')}
        />

        {/* <Link to="">Perfil</Link> */}
        <NavDropdown
          id="nav-dropdown-light-example"
          title="Perfil"
          menuVariant="dark"
        >
          <NavDropdown.Item onClick={fazerLogout}>Logout</NavDropdown.Item>
        </NavDropdown>
      </div>
    </header>
  );
};

export default Header;
