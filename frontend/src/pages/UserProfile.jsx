import Header from "../components/Header";
import HeaderContainer from "../components/HeaderContainer";
import { useSelector, useDispatch } from "react-redux";
import { ReactSVG } from "react-svg";
import User from "../assets/images/user.svg";
import "../styles/userProfile.css";
import { Form, Button } from "react-bootstrap"
import { useState } from "react";
import axios from "axios";

export function UserProfile() {
    const nome = useSelector((state) => state.userNome);
    const campus = useSelector((state) => state.userCampus);
    const curso = useSelector((state) => state.userCurso);
    const email = useSelector((state) => state.userEmail);
    const imagem = useSelector((state) => state.userImg);
    const id = useSelector((state) => state.userId);
    const admin = useSelector((state) => state.userAdmin);
    const [url, setUrl] = useState("");
    const [senha, setSenha] = useState("");
    const dispatch = useDispatch();

    const enviarURL = () => {
        const data = { nome: nome, email: email, senha: senha, campus: campus, curso: curso, imagem: url, id: id }

        axios
            .put("http://localhost:8080/usuario", data)
            .then((res) => {
                dispatch({
                    type: "LOGIN",
                    userId: id,
                    userNome: nome,
                    userEmail: email,
                    userCampus: campus,
                    userCurso: curso,
                    userAdmin: admin,
                    userImg: url,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div id="about">
            <HeaderContainer />
            <Header />
            <div className="main-container">
                <main>
                    <fieldset>
                        <legend>Perfil do Usuário</legend>
                    </fieldset>
                </main>
                <div className="userPhoto">
                    {imagem === null ? (<ReactSVG
                        src={User}
                        alt="Ícone de usuário"
                        className="user-img"
                    />)
                        : (<img src={imagem}
                            alt="Ícone de usuário"
                            className="user-img"
                        />)}
                    <div className="userInfo">
                        <p>Nome: {nome}</p>
                        <p>Campus: {campus}</p>
                        <p>Curso: {curso}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
                <main>
                    <fieldset>
                        <legend>Alterar Imagem de Perfil</legend>
                        <Form>
                            <Form.Group>
                                <Form.Label>URL da imagem</Form.Label>
                                <Form.Control placeholder="Insira a URL da imagem desejada" onChange={(e) => setUrl(e.target.value)} />
                                <Form.Label>Confirme sua senha</Form.Label>
                                <Form.Control type="password" placeholder="***************" onChange={(e) => setSenha(e.target.value)} />
                                <Button variant="primary" onClick={enviarURL}>Salvar</Button>
                            </Form.Group>
                        </Form>
                    </fieldset>
                </main>
            </div>
        </div>
    );
}
