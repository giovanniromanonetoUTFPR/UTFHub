import Header from "../components/Header";
import HeaderContainer from "../components/HeaderContainer";
import { useSelector } from "react-redux";
import "../styles/userProfile.css";

export function UserProfile() {
    const nome = useSelector((state) => state.userNome);
    const campus = useSelector((state) => state.userCampus);
    const curso = useSelector((state) => state.userCurso);
    const email = useSelector((state) => state.userEmail);

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
                    <img
                        src="https://cdn.vox-cdn.com/thumbor/eUpAwF52MelR7_0M6B9gDCgK1q4=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/9628525/Screen_Shot_2017_11_07_at_1.39.21_PM.png"
                        alt="Ícone de usuário"
                        className="user-img"
                    />
                    <div className="userInfo">
                        <p>Nome: {nome}</p>
                        <p>Campus: {campus}</p>
                        <p>Curso: {curso}</p>
                        <p>Email: {email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
