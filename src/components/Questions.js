import play from "../assets/seta_play.png"
import virar from "../assets/virar.png"
import certo from "../assets/icone_certo.png"
import medio from "../assets/icone_quase.png"
import errado from "../assets/icone_erro.png"

export default function Questions() {
    return (
        <div className="questions">
            <div className="numeroPergunta">
                Pergunta 1
                <img src={play} alt="play" />
            </div>
            <div className="numeroPergunta pergErrado">
                Pergunta 1
                <img src={errado} alt="errado" />
            </div>
            <div className="numeroPergunta pergMedio">
                Pergunta 1
                <img src={medio} alt="medio" />
            </div>
            <div className="numeroPergunta pergCerto">
                Pergunta 1
                <img src={certo} alt="certo" />
            </div>
            <div className="carta">
                <div className="front-face">
                    Frente
                    <img src={virar} alt="virar" />
                </div>
            </div>
            <div className="carta">
                <div className="back-face">
                    Verso
                    <div>
                        <button className="errado">Não lembrei</button>
                        <button className="medio">Quase não lembrei</button>
                        <button className="certo">Zap!</button>
                    </div>
                </div>
            </div>
        </div>
    );
  }