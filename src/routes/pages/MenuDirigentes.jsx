import "../../css/Menu.css"
import priority from "../../images/priority.png"
import registroonline from "../../images/registro-online.png"

function MenuDirigentes() {
    return(
        <main id="principal">

        <div class="main__title">
        <h1>O que deseja realizar?</h1>
        </div>

        <section class="main__board">
            <div class="board__cards">
                <h5>lista de dirigentes e 
                    suas congregações</h5>

                <img src={priority} alt="" width="150px" />

            </div>

            <div class="board__cards">
                <h5>registrar novo 
                    dirigente e sua 
                    congregação</h5>

                <img src={registroonline} alt="" width="150px" />

            </div>
        </section>

    </main>
    );
};

export default MenuDirigentes;