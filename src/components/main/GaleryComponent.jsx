import './GaleryComponent.css';
import galeria1 from '../../assets/galeria1.jpg';
import galeria2 from '../../assets/galeria2.jpg';
import galeria3 from '../../assets/galeria3.jpg'; 
import galeria4 from '../../assets/galeria4.jpg';
import galeria5 from '../../assets/galeria5.jpg';
import galeria6 from '../../assets/galeria6.jpg';   
import galeria7 from '../../assets/galeria7.jpg';
import galeria8 from '../../assets/galeria8.jpg';
import galeria9 from '../../assets/galeria9.jpg';


const GaleryComponent = () => {
    const imagens = [
        galeria1,
        galeria2,
        galeria3,
        galeria4,
        galeria5,
        galeria6,
        galeria7,
        galeria8,
        galeria9,
    ];

    
    return (
        <section className="gallery-section">
            <div className="gallery-container">
                <span className="gallery-subtitle">Nossa Galeria</span>

                <h2 className="gallery-title">
                    CONHECIDOS PELO MELHOR CORTE
                </h2>

                <p className="gallery-description">
                    Transformamos estilo em confiança. Nossa equipe combina técnica,
                    precisão e atendimento de excelência para oferecer uma experiência
                    única em cada visita.
                </p>

                <div className="gallery-grid">
                    {imagens.map((imagem, index) => (
                        <div className="gallery-card" key={index}>
                            <img
                                src={`${imagem}?auto=format&fit=crop&w=800&q=80`}
                                alt={`Corte ${index + 1}`}
                                className="gallery-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GaleryComponent;
