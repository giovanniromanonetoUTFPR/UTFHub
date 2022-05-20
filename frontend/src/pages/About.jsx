import Header from "../components/Header";
import HeaderContainer from "../components/HeaderContainer";
import "../styles/about.css";

export function About() {
  return (
    <div id="about">
      <HeaderContainer />
      <Header />
      <div className="main-container">
      <main>
          <fieldset>
            <legend>Sobre</legend>
          </fieldset>
        </main>
          <p>UTFHub é uma iniciativa dos alunos da universidade com o objetivo de criar um ambiente de troca de conhecimento.</p>
        <main>
          <fieldset>
            <legend>Contato</legend>
          </fieldset>
        </main>
        <p>contato-utfhub@gmail.com</p>
      </div>
    </div>
  );
}
