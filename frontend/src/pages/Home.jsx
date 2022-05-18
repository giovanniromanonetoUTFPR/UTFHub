import axios from "axios";
import { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import { ReactSVG } from "react-svg";
import User from "../assets/images/user.svg";
import Header from "../components/Header";
import HeaderContainerLogo from "../components/HeaderContainerLogo";
import Search from "../components/Search";
import "../styles/home.css";

export function Home() {
  const history = useHistory();
  const userLogado = useSelector((state) => state.usuarioLogado);
  const [post, setPost] = useState();

  const baseURL = "http://localhost:8080/materia/posts";

  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.content);
        setPost(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function likePost(post) {
    const dadosPostLike = {
      autor: post.autor,
      pergunta: post.pergunta,
      materiaId: post.materiaId,
      autorId: post.autorId,
      likes: post.likes + 1,
    };

    axios
      .put(`http://localhost:8080/posts/${post.id}/like`, dadosPostLike)
      .then((res) => {
        // dispatch({
        //   type: "LIKE",
        //   postLiked: true,
        // });
        window.location.reload();
      })
      .catch((error) => {
        console.log("Erro: " + error);
      });
  }

  return (
    <div id="page-home">
      {userLogado === 0 ? <Redirect to="/" /> : null}
      <HeaderContainerLogo />
      <Header />
      <button id="btn-materias" onClick={() => history.push("/materias")}>
        Ver matérias
      </button>
      <Search />
      <div className="main-container">
        <main>
          <fieldset>
            <legend>Últimos Posts</legend>
            {post ? (
              post.map((post) => (
                <div className="container-posts" key={post.id}>
                  <div className="pergunta-container">
                    <p>{post.pergunta}</p>
                  </div>

                  <div className="autor-container">
                    <ReactSVG
                      src={User}
                      alt="Ícone de usuário"
                      className="user-img"
                    />
                    <span>{post.autor}</span>
                  </div>

                  <div className="like-button" key={post.id}>
                    <button
                      aria-label="Marcar como gostei"
                      onClick={() => likePost(post)}
                    >
                      {/* {postLiked ? (
                      <FiThumbsUp
                        className="like"
                        style={{ color: "#FF941A" }}
                      />
                    ) : (
                      <FiThumbsUp className="like" />
                    )} */}
                      <FiThumbsUp className="like" />
                    </button>
                    <span>{post.likes}</span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ marginTop: "40px", fontSize: "18px" }}>
                Sem posts por enquanto, bora criar um?
              </p>
            )}
          </fieldset>
        </main>
      </div>
    </div>
  );
}
