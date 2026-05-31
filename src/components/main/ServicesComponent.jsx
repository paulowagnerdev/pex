import React from 'react';
import {
    Scissors,
    BadgeCheck,
    UserRound,
    Sparkles,
    Droplets,
    Brush
} from "lucide-react";
import './ServicesComponent.css';

const ServicesComponent = () => {
    const services = [
        {
            icon: Scissors,
            title: "CORTE MASCULINO",
            description:
                "Cortes clássicos e modernos realizados com técnica e atenção aos detalhes. Cada atendimento é personalizado para valorizar o formato do rosto, o estilo e a personalidade de cada cliente."
        },
        {
            icon: BadgeCheck,
            title: "BARBA",
            description:
                "Modelagem, alinhamento e acabamento da barba com precisão. Um serviço pensado para manter um visual elegante, bem cuidado e adequado ao seu estilo."
        },
        {
            icon: UserRound,
            title: "CORTE + BARBA",
            description:
                "A combinação perfeita para quem busca praticidade e um visual completo. Corte e barba realizados na mesma sessão para garantir harmonia e um acabamento impecável."
        },
        {
            icon: Sparkles,
            title: "ACABAMENTO",
            description:
                "Serviço ideal para manter o corte sempre alinhado entre visitas. Inclui ajustes laterais, contornos e detalhes que fazem a diferença no resultado final."
        },
        {
            icon: Droplets,
            title: "HIDRATAÇÃO CAPILAR",
            description:
                "Tratamento que ajuda a recuperar a saúde dos fios, reduzindo o ressecamento e proporcionando mais brilho, maciez e resistência ao cabelo."
        },
        {
            icon: Brush,
            title: "MODELAGEM",
            description:
                "Finalização profissional com produtos de qualidade para destacar o corte e facilitar a manutenção do penteado no dia a dia."
        }
    ];

    return (
        <>
            <section className="services-section" id="services">
                <div className="services-grid">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <article
                                key={index}
                                className="service-card"
                            >
                                <Icon
                                    size={48}
                                    strokeWidth={1.5}
                                />

                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </article>
                        );
                    })}
                </div>
            </section>
            <section className="cta-section">
                <div className="cta-overlay">
                    <h2>
                        VENHA NOS VISITAR E VIVA A EXPERIÊNCIA
                        DE UMA BARBEARIA DE VERDADE
                    </h2>

                    <p>
                        Cortes clássicos e modernos, atendimento personalizado
                        e um ambiente pensado para o seu conforto.
                    </p>

                </div>
            </section>
        </>
    );
};

export default ServicesComponent;
