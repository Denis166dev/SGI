import "../../css/Inserirvisitante.css"
import "../../css/Caddiri.css"
import setaproximo from "../../images/setaproximo.png"

function InserirNovaEscala() {
    return (
        <main id="contentvisitante">
            <div id="title">
                <h>INSERIR NOVA ESCALA</h>
            </div>

            <form id="formmeses">
                <label id="labelmeses">
                    <h className="titlesforminserir">SELECIONE O MÊS</h><br></br>
                    <select id="meses" name="meses">
                        <option value="0">Selecione aqui ...</option>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                    </select>
                </label>
            </form>
            <div id="position_button">
                <button id="proximo">
                    <div>
                        <h>PRÓXIMO</h>
                        <img src={setaproximo} alt="seta proximo" />
                    </div>
                </button>
            </div>
        </main >
    );
};

export default InserirNovaEscala;