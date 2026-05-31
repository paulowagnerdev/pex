import './MainComponent.css';
import { Scissors, Brush, SprayCan } from "lucide-react";

const MainComponent = () => {
    return (
        <main className='main-component-container' id="about">
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
                        Combinamos tradição, estilo e técnicas modernas para oferecer<br id="description-line-break" />
                        uma experiência única em cada atendimento. Nosso objetivo é <br id="description-line-break" />
                        valorizar sua personalidade através de cortes precisos,<br id="description-line-break" />
                        acabamento impecável e um ambiente pensado para o seu conforto.
                    </p>

                    <div className="features-container">

                        <div className="feature">
                            <Scissors size={65} />
                            <div>
                                <h3>PROFISSIONAIS QUALIFICADOS</h3>
                                <p>
                                    Barbeiros experientes e preparados para entregar cortes<br />
                                    modernos, degradês precisos e um atendimento de qualidade.
                                </p>

                            </div>
                        </div>

                        <div className="feature">
                            <Brush size={65} />

                            <div>
                                <h3>EXPERIÊNCIA PERSONALIZADA</h3>

                                <p>
                                    Cada cliente recebe um atendimento exclusivo para encontrar<br />
                                    o estilo que melhor combina com sua personalidade.
                                </p>
                            </div>
                        </div>

                        <div className="feature">
                            <SprayCan size={65} />
                            <div>
                                <h3>PRODUTOS DE ALTA QUALIDADE</h3>

                                <p>
                                    Utilizamos produtos profissionais selecionados para garantir<br />
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
                    <div className="main-component-container-image-container">

                        <div className="main-component-container-conteudo">
                            <h2>HORÁRIO DE FUNCIONAMENTO</h2>

                            <div className="schedule-item">
                                <h3>TERÇA - SEXTA</h3>
                                <p>09:00 - 19:00</p>
                            </div>

                            <div className="divider"></div>

                            <div className="schedule-item">
                                <h3>SÁBADO</h3>
                                <p>09:00 - 12:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="main-component-container-line">

                    </div>


                </div>

            </div>
        </main>
    );
};

export default MainComponent;

