import { useParams, useNavigate } from 'react-router-dom';

import logo from "../assets/images/logo.svg";
import deleteImage from "../assets/images/delete.svg";
import checkImage from "../assets/images/check.svg";
import answerImg from "../assets/images/answer.svg";

import { Question } from "../components/Question";
import { Button } from "../components/Button";
import { RoomCode } from "../components/RoomCode";
// import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import "../styles/room.scss";

type RoomParams = {
    id: string;
}

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;
    const { title, questions } = useRoom(String(roomId));
    const history = useNavigate();

    async function handleCheckQuestionAsAnswered(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isAnswered: true,
        })
    }

    async function handleHighlightQuestion(questionId: string) {
        await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
            isHighLighted: true,
        })
    }

    async function handleEndRoom() {
        await database.ref(`rooms/${roomId}`).update({
            endeAt: new Date(),
        });

        history("/");
    }

    async function handleDeletQuestion(questionId: string) {
        if(window.confirm("Tem certeza que deseja excluir esta pergunta ?")) {
            await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
        }
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logo} alt="Letmeask"/>
                    <div>
                        <RoomCode code={params.id!} />
                        <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main className="content">
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    { questions.length > 0 && <span>{questions.length} Perguntas</span>}
                </div>
                <div className="question-list">
                    {questions.map(question => {
                        return(
                            <Question
                                key={question.id}
                                content={question.content}
                                author={question.author}
                                isAnswered={question.isAnswered}
                                isHighLighted={question.isHighLighted}
                            >
                                { !question.isAnswered && (
                                    <>
                                        <button
                                        type="button"
                                        onClick={() => handleCheckQuestionAsAnswered(question.id )}
                                        >
                                            <img src={ checkImage } alt="Marcar pergunta como respondida" />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleHighlightQuestion(question.id )}
                                        >
                                            <img src={ answerImg } alt="Dar destaque a pergunta" />
                                        </button>
                                    </>
                                )  }
                                <button
                                    type="button"
                                    onClick={() => handleDeletQuestion(question.id )}
                                >
                                    <img src={ deleteImage } alt="Remover pergunta" />
                                </button>
                            </Question>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}