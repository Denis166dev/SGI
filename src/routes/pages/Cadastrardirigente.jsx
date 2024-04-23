import "../../css/Caddiri.css"
import iconsave from "../../images/iconsave.png"

function Cadastrardirigente() {
    return (
        <main id="content">
            <div id="title">
                <h>INSERIR NOVO DIRIGENTE</h>
            </div>

            <form>
                <label className="labelscad">
                    <h className="titlesform">NOME</h><br></br>
                    <input className="inputcad1" type="text" placeholder="Digite o nome aqui..." />
                </label>

                <label className="labelscad">
                    <h className="titlesform">CONGREGAÇÃO RESPONSÁVEL</h><br></br>
                    <input className="inputcad1" type="text" placeholder="Digite o nome aqui..." />
                </label>

                <div id="carnum">
                    <label>
                        <h className="titlesform">CARGO</h><br></br>
                        <input className="inputcad2" type="text" placeholder="Digite o nome aqui..." />
                    </label>

                    <label>
                        <h className="titlesform">NÚMERO DE TELEFONE</h><br></br>
                        <input className="inputcad2" type="text" placeholder="Digite o nome aqui..." />
                    </label>
                </div>

            </form>

            <button id="save">
                <div>
                <h>SALVAR</h>
                <img src={iconsave} alt="icone salvar"/>
                </div>
            </button>
        </main >
    );
};

export default Cadastrardirigente;