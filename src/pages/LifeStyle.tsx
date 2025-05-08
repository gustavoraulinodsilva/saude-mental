import React, { useEffect, useState } from "react";
import '../sass/pages/_life-style.scss'
import nutritionData from '../data/nutrition.json';
import exerciseData from '../data/exerciseMentalHealth.json';

interface lifeStyleData{
    nutrition: nutritionData[];
    exercise: exerciseData[];
}

interface nutritionData{
    title: string;
    introduction: string;
    sectionOne: {
        title: string;
        content: string;
        nutrients: string[];
        observation: string;
    };
    sectionTwo: {
        title: string;
        content: string;
        details: string[];
    };
    sectionThree: {
        title: string;
        content: string;
        complementary_pratices: string[];
    };
    conclusion: string;
}

interface exerciseData{
    title: string;
    benefits: Array<{
        id: number;
        title: string;
        description: string;
        icon: string;
    }>;
    recommendedExercises: Array<{
        id: number;
        name: string;
        benefits: string;
        icon: string;
        intensity: string;
        frequency: string;
        duration: string;
    }>;
    tips: string[];
    importantNote: string;
}

const LifeStyle: React.FC = () => {
    const [data, setData] = useState<lifeStyleData | null>(null);
    
    useEffect(() => {
        const formattedData: lifeStyleData = {
            nutrition: [
                {
                    title: nutritionData.title,
                    introduction: nutritionData.introduction,
                    sectionOne: nutritionData.sectionOne,
                    sectionTwo: nutritionData.sectionTwo,
                    sectionThree: nutritionData.sectionThree,
                    conclusion: nutritionData.conclusion
                }
            ],
            exercise: [
                {
                    title: exerciseData.exerciseMentalHealth.title,
                    benefits: exerciseData.exerciseMentalHealth.benefits,
                    recommendedExercises: exerciseData.exerciseMentalHealth.recommendedExercises,
                    tips: exerciseData.exerciseMentalHealth.tips,
                    importantNote: exerciseData.exerciseMentalHealth.importantNote
                }
            ]
        };
        
        setData(formattedData);
    }, []);

    if (!data) {
        return <div>Carregando...</div>;
    }

    return (
        <section className="lifestyle-page">
            <div className="lifestyle-hero">
                <div className="container">
                    <h1>Estilo de Vida e Saúde Mental</h1>
                    <p className="hero-subtitle">Como alimentação e exercícios impactam seu bem-estar emocional</p>
                </div>
            </div>
            <main className="lifestyle-content container">
                {/* Seção de Nutrição */}
                <section id="alimentacao" className="nutrition-section">
                    <h2>{data.nutrition[0].title}</h2>
                    <p className="section-intro">{data.nutrition[0].introduction}</p>
                    
                    {/* Seção 1 - Nutrientes */}
                    <h3>{data.nutrition[0].sectionOne.title}</h3>
                    <p>{data.nutrition[0].sectionOne.content}</p>
                    <div className="nutrition-grid">
                        <article className="nutrition-card">
                            <div className="nutrition-icon">🥦</div>
                            <h3>Nutrientes Essenciais</h3>
                            <ul className="nutrition-list">
                                {data.nutrition[0].sectionOne.nutrients.map((nutrient, index) => (
                                    <li key={index}>{nutrient}</li>
                                ))}
                            </ul>
                        </article>
                        
                        {/* Você pode manter seus cards estáticos */}
                        <article className="nutrition-card">
                            <div className="nutrition-icon">🚫</div>
                            <h3>Evitar</h3>
                            <ul className="avoid-list">
                                <li>Excesso de açúcar refinado</li>
                                <li>Consumo excessivo de cafeína</li>
                                <li>Alimentos ultraprocessados</li>
                            </ul>
                        </article>
                        
                        <article className="nutrition-card">
                            <div className="nutrition-icon">💧</div>
                            <h3>Hidratação</h3>
                            <p>A desidratação pode aumentar os níveis de cortisol (hormônio do estresse)</p>
                        </article>
                    </div>
                    
                    {/* Seção 2 - Microbiota */}
                    <div className="subsection">
                        <h3>{data.nutrition[0].sectionTwo.title}</h3>
                        <p>{data.nutrition[0].sectionTwo.content}</p>
                        <ul className="details-list">
                            {data.nutrition[0].sectionTwo.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                    
                    <blockquote className="nutrition-quote">
                        {data.nutrition[0].conclusion}
                    </blockquote>
                </section>
                
                {/* Seção de Exercícios */}
                <section id="atividades" className="activities-section">
                    <h2>{data.exercise[0].title}</h2>
                    
                    {/* Benefícios */}
                    <div className="activities-grid">
                        {data.exercise[0].benefits.map(benefit => (
                            <div key={benefit.id} className="activity-card">
                                <div className="activity-icon">{benefit.icon}</div>
                                <h3>{benefit.title}</h3>
                                <p>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* Exercícios Recomendados */}
                    <h3 className="subsection-title">Exercícios Recomendados</h3>
                    <div className="activities-grid">
                        {data.exercise[0].recommendedExercises.map(exercise => (
                            <div key={exercise.id} className="activity-card exercise-card">
                                <div className="activity-icon">{exercise.icon}</div>
                                <h3>{exercise.name}</h3>
                                <p>{exercise.benefits}</p>
                                <div className="exercise-details">
                                    <span>Intensidade: {exercise.intensity}</span>
                                    <span>Frequência: {exercise.frequency}</span>
                                    <span>Duração: {exercise.duration}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Dicas */}
                    <div className="tips-section">
                        <h3>Dicas Práticas</h3>
                        <ul className="tips-list">
                            {data.exercise[0].tips.map((tip, index) => (
                                <li key={index}>{tip}</li>
                            ))}
                        </ul>
                        <div className="important-note">
                            <strong>Nota importante:</strong> {data.exercise[0].importantNote}
                        </div>
                    </div>
                </section>
                
                {/* Mantenha sua seção de benefícios como está */}
                <section className="benefits-section">
                    <h2>Benefícios Comprovados</h2>
                    <div className="benefits-grid">
                        <div className="benefit-card">
                            <h3>30%</h3>
                            <p>Redução nos sintomas de ansiedade com exercícios regulares</p>
                        </div>
                        <div className="benefit-card">
                            <h3>2x</h3>
                            <p>Mais probabilidade de manter a estabilidade emocional</p>
                        </div>
                        <div className="benefit-card">
                            <h3>40%</h3>
                            <p>Melhora na qualidade do sono com dieta balanceada</p>
                        </div>
                    </div>
                </section>
            </main>
        </section>
    );
}

export default LifeStyle;