import { useNavigate } from "react-router-dom";

// import { auth, firebase } from "../services/firebase";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import logoGoogle from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContexts";


export function Home() {

    const history = useNavigate();

    const { user, signInWithGoogle} = useContext(AuthContext);

    function handleCreateRoom() {
        if(!user) {
            signInWithGoogle();
        }
        history("/rooms/new");
    }
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Illustração" />
                <strong>Toda pergunta tem sua resposta.</strong>
                <p>Aprenda a compartilhar conhecimento com outras pessoas</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logo} alt="logotipo Letmeask" />
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={logoGoogle} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em uma sala</div>
                    <form>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}