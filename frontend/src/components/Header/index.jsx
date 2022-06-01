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
  const userImagem = useSelector((state) => state.userImg);
  function fazerLogout() {
    dispatch({
      type: "LOGOUT",
      usuarioLogado: 0,
    });
    history.push("/");
  }

  function paginaHome() {
    dispatch({
      type: "home",
      
    });
    history.push("/home");
  }

  function paginaMateria() {
    dispatch({
      type: "materias",
      
    });
    history.push("/materias");
  }

  function paginaSobre() {
    dispatch({
      type: "about",
      
    });
    history.push("/about");
  }

  function paginaContato() {
    dispatch({
      type: "about",
      
    });
    history.push("/about");
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
        {userImagem === null ? (<ReactSVG
          src={User}
          alt="Ícone de usuário"
          className="header-user-img"
          onClick={() => history.push('/userProfile')}
        />)
          : (<img src={userImagem}
            alt="Ícone de usuário"
            className="header-user-img"
            onClick={() => history.push('/userProfile')} />)}

        {/* <Link to="">Perfil</Link> */}
        <NavDropdown
          id="nav-dropdown-light-example"
          title="Perfil"
          menuVariant="dark"
        >
          <NavDropdown.Item onClick={fazerLogout}>Logout</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown
            id="nav-dropdown-light-example1"
            title="Perfil"
            menuVariant="dark"
            >
      <NavDropdown.Item onClick={paginaHome}>Home</NavDropdown.Item>
      <NavDropdown.Item onClick={paginaMateria}>Matérias</NavDropdown.Item>
      <NavDropdown.Item onClick={paginaSobre}>Sobre</NavDropdown.Item>
      <NavDropdown.Item onClick={paginaContato}>Contato</NavDropdown.Item>
      <NavDropdown.Item onClick={fazerLogout}>Logout</NavDropdown.Item>

      </NavDropdown>

        
        
      </div>


    </header>
               
  );
  };

export default Header;
