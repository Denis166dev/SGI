import "../../css/Inserirvisitante.css"
import "../../css/Caddiri.css"
import iconsave from "../../images/iconsave.png"

function InserirVisitante() {
    return (
        <main id="contentvisitante">
            <div id="title">
                <h>INSERIR NOVO VISITANTE</h>
            </div>

            <form>
                <div id="nomesx">
                    <label className="labelsinserir">
                        <h className="titlesforminserir">NOME:</h><br></br>
                        <input className="inputtexts" type="text" placeholder="Digite o nome aqui..." />
                    </label>

                    <label className="labelsinserir" id="labelsx">
                        <h className="titlesforminserir">SEXO:</h><br></br>
                        <div id="divmf">
                            <h className="titlesforminserir">M</h>
                            <input className="checkboxs" type="checkbox" placeholder="M" />
                            <h className="titlesforminserir">F</h>
                            <input className="checkboxs" type="checkbox" placeholder="F" />
                        </div>
                    </label>
                </div>
                <div id="tipo" className="labelsinserir">
                    <h className="titlesforminserir">TIPO:</h>
                    <div id="inputsnovonao">
                        <label>
                            <input className="checkboxs" type="checkbox" />
                            <h className="titlesforminserir"> NOVO CONVERTIDO</h>
                        </label>

                        <label>
                            <input className="checkboxs" type="checkbox" />
                            <h className="titlesforminserir"> NÃO EVANGELICO</h>                            
                        </label>
                    </div>
                </div>

                <div id="lie">
                    <label className="labelsinserir">
                        <h className="titlesforminserir">LOCAL DE ONDE VEIO OU CONGREGAÇÃO:</h><br></br>
                        <input className="inputtexts" type="text" placeholder="Digit o local aqui..." />
                    </label>

                    <label className="labelsinserir">
                        <h className="titlesforminserir">IGREJA:</h><br></br>
                        <input className="inputtexts" type="text" placeholder="Digit a igreja aqui..." />
                    </label>

                    <label className="labelsinserir">
                        <h className="titlesforminserir">ESTADO CIVIL:</h><br></br>
                        <input className="inputtexts" type="text" placeholder="Digit o Estado Civil aqui..." />
                    </label>
                </div>

            </form>
            <div id="position_button">
                <button id="save">
                    <div>
                        <h>SALVAR</h>
                        <img src={iconsave} alt="icone salvar" />
                    </div>
                </button>
            </div>
        </main >
    );
};

export default InserirVisitante;