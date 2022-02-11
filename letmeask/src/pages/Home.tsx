import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import logoGoogle from "../assets/images/google-icon.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function Home() {
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
                    <button className="create-room">
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