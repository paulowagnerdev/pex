import { useState } from "react";
import '../header/HeaderStyle.css';
import logo from '../../assets/logoletras.png';
import { Menu } from "lucide-react";

const HeaderComponent = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Logo" />
                <nav className="nav-links">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="#services">Serviços</a></li>
                        <li><a href="https://www.instagram.com/mistermustache.barbershop/">Contato</a></li>
                    </ul>
                </nav>
                <ul className="nav-social">
                    <li><a href="https://www.instagram.com/mistermustache.barbershop/"><i className="fab fa-instagram"></i></a></li>
                </ul>

                <div className="menu-btn">
                    <Menu color="#e8e8e8"  onClick={() => setMenuOpen(true)}/>
                </div>
                
            </div>


            <div
                className={`overlay ${menuOpen ? "active" : ""}`}
                onClick={() => setMenuOpen(false)}
            />

            <aside className={`sidebar ${menuOpen ? "active" : ""}`}>
                <button
                    className="close-btn"
                    onClick={() => setMenuOpen(false)}
                >
                    ✕
                </button>

                <a href="#home">Home</a>
                <a href="#about">Sobre</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contato</a>
            </aside>

        </header>
    );
};

export default HeaderComponent;