import '../header/HeaderStyle.css';
import logo from '../../assets/logoletras.png';

const HeaderComponent = () => {
    return (
        <header>
            <div className="header-container">
                <img src={logo} alt="Logo" />
                <nav>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                    <ul className="social">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </nav>

            </div>
        </header>
    );
};

export default HeaderComponent;