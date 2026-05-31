import './StatsComponent.css';
import React, { useEffect, useRef, useState } from 'react';
import Counter from "../../hooks/Counter";

const StatsComponent = () => {

    const sectionRef = useRef(null);
    const [startCounter, setStartCounter] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounter(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.3
            }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="stats-section"  ref={sectionRef}>
            <div className="stats-line"></div>

            <div className="stats-box">
                <div className="stats-grid">

                    <div className="stats-item">
                        <h2>
                            <Counter end={5} startAnimation={startCounter} />+
                        </h2>
                        <p>ANOS DE EXPERIÊNCIA</p>
                    </div>

                    <div className="stats-item">
                        <h2><Counter end={2500} startAnimation={startCounter} />+</h2>
                        <p>CLIENTES SATISFEITOS</p>
                    </div>

                    <div className="stats-item">
                        <h2><Counter end={1} startAnimation={startCounter} />+</h2>
                        <p>ATENDIMENTO EXCLUSIVO</p>
                    </div>

                    <div className="stats-item">
                        <h2><Counter end={100} startAnimation={startCounter} />%</h2>
                        <p>FOCO NA QUALIDADE</p>
                    </div>

                </div>
            </div>
            <div className="stats-line"></div>
        </section>
    );
};

export default StatsComponent;
