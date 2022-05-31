import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import Header from "../components/Header";
import HeaderContainerLogo from "../components/HeaderContainerLogo";
import { ListGroup } from "react-bootstrap";
import "../styles/home.css";

export function Admin() {
    const history = useHistory();
    const isAdmin = useSelector((state) => state.userAdmin);
    const [users, setUsers] = useState([]);

    const baseURL = "http://localhost:8080/usuario";

    useEffect(() => {
        axios
            .get(baseURL)
            .then((res) => {
                setUsers(res.data.content);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    return (
        <div id="page-home">
            {isAdmin === 0 ? <Redirect to="/" /> : null}
            <HeaderContainerLogo />
            <Header />
            <div className="main-container">
                <main>
                    <fieldset>
                        <legend>Usuários Cadastrados</legend>
                        <ListGroup as="ol" numbered variant="flush">
                            {users.map((user) => {
                                return (
                                    <ListGroup.Item
                                        as="li"
                                        className="d-flex justify-content-between align-items-start"
                                    >
                                        <div className="ms-2 me-auto">
                                            <div className="fw-bold">{user.nome}</div>
                                            Email: {user.email} <br />
                                            Campus: {user.campus} <br />
                                            Curso: {user.curso} <br />
                                        </div>
                                    </ListGroup.Item>
                                )
                            })}
                        </ListGroup>
                    </fieldset>
                </main>
            </div>
        </div>
    );
}
