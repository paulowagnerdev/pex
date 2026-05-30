import './MainComponent.css';
import { Scissors, Brush, SprayCan } from "lucide-react";

const MainComponent = () => {
    return (
        <main className='main-component-container'>
            <div className="about-container">

                <div className="main-component-container-left">
                    <span className="subtitle">
                        SOBRE A BARBEARIA
                    </span>

                    <h1>
                        UM TOQUE MODERNO
                        <br />
                        NOS CORTES CLÁSSICOS
                    </h1>

                    <p className="description">
                        Combinamos tradição, estilo e técnicas modernas para oferecer
                        uma experiência única em cada atendimento. Nosso objetivo é
                        valorizar sua personalidade através de cortes precisos,
                        acabamento impecável e um ambiente pensado para o seu conforto.
                    </p>

                    <div className="features-container">

                        <div className="feature">
                                <Scissors size={50} />
                                <div>
                                    <h3>PROFISSIONAIS QUALIFICADOS</h3>
                                    <p>
                                        Barbeiros experientes e preparados para entregar cortes
                                        modernos, degradês precisos e um atendimento de qualidade.
                                    </p>

                                </div>
                        </div>

                        <div className="feature">
                            <Brush size={50} />

                            <div>
                                <h3>EXPERIÊNCIA PERSONALIZADA</h3>

                                <p>
                                    Cada cliente recebe um atendimento exclusivo para encontrar
                                    o estilo que melhor combina com sua personalidade.
                                </p>
                            </div>
                        </div>

                        <div className="feature">
                            <SprayCan size={50} />
                            <div>
                                <h3>PRODUTOS DE ALTA QUALIDADE</h3>

                                <p>
                                    Utilizamos produtos profissionais selecionados para garantir
                                    o melhor cuidado com cabelo e barba.
                                </p>
                            </div>
                        </div>

                    </div>

                    <button className="about-btn">
                        MAIS SOBRE NÓS
                    </button>
                </div>

                <div className="main-component-container-right">
                    {/* imagem */}
                </div>

            </div>
        </main>
    );
};

export default MainComponent;

