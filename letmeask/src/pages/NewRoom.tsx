import { Link } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";

import "../styles/auth.scss";
import { Button } from "../components/Button";

export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Nome da sala"
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>Quer entrar em uma sala já existente? <Link to="/">Clique aqui</Link></p>
                </div>
            </main>
        </div>
    );
}
