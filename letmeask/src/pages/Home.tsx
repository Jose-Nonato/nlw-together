import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import illustrationImg from "../assets/images/illustration.svg";
import logo from "../assets/images/logo.svg";
import logoGoogle from "../assets/images/google-icon.svg";

import { database } from "../services/firebase";

import "../styles/auth.scss";
import { Button } from "../components/Button";
import { AuthContext } from "../contexts/AuthContexts";


export function Home() {

    const history = useNavigate();
    const { user, signInWithGoogle} = useContext(AuthContext);
    const [roomCode, setRoomCode] = useState("");

    async function handleCreateRoom() {
        if(!user) {
            await signInWithGoogle();
        }
        history("/rooms/new");
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();
        
        if(roomCode.trim() === "") {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if(!roomRef.exists()) {
            alert("Room does not exist");
            return;
        }

        history(`/rooms/${roomCode}`);
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
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="text"
                            placeholder="Digite o código da sala"
                            onChange={event => setRoomCode(event.target.value)}
                            value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    );
}