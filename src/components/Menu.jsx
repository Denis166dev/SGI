import "../css/Menu.css"
import { Outlet } from "react-router-dom";
import home from "../images/home.png"
import papeis from "../images/papeis.png"
import clipboard from "../images/clipboard.png"
import calendar from "../images/calendar.png"
import bargraph from "../images/bar-graph.png"

function Menu() {
    return (
        <>

            <header id="cabeçalho">

            </header>


            <aside id="sidebar">
                <section className="sidebar__select">

                    <div className="select__icons">
                        <a href="#">
                            <img src={home} alt="icon-home" width="45px" />
                        </a>

                        <a href="#">
                            <img src={papeis} alt="icon-papers" width="45px" />
                        </a>

                        <a href="#">
                            <img src={clipboard} alt="icon-clipboard" width="45px" />
                        </a>

                        <a href="#">
                            <img src={calendar} alt="icon-calendar" width="45px" />
                        </a>

                        <a href="#">
                            <img src={bargraph} alt="icon-graph" width="45px" />
                        </a>
                    </div>

                </section>
                
            </aside>
            <main id="mainpai">
                <Outlet />
            </main>
        </>

    );

};

export default Menu;