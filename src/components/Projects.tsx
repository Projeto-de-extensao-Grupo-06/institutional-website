import { useEffect, useState } from 'react';
import type PortfolioItem from '../interfaces/PortfolioItem';
import { getPortfolios } from '../services/portfolioService';
import styles from '../styles/Projects.module.css';

const FALLBACK_PROJECTS: PortfolioItem[] = [
  {
    title: "Residência Térrea — 4,5 kWp",
    description: "Sistema residencial composto por 10 módulos de 450 Wp com inversor monofásico. Redução média de 80% na fatura de energia.",
    imageSrc: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Casa Sobrado — 5,5 kWp",
    description: "Instalação em telhado de cerâmica com estrutura reforçada e monitoramento via app. Sistema com 12 módulos monocristalinos.",
    imageSrc: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Residência Compacta — 3,2 kWp",
    description: "Projeto compacto ideal para residências com baixo consumo. Utilização de microinversores para maximizar produção.",
    imageSrc: "https://images.unsplash.com/photo-1620027131420-74b4b6c3c2f6?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Pequeno Comércio — 7 kWp",
    description: "Instalação para uma pequena loja de bairro visando reduzir custos operacionais. Sistema trifásico com 16 módulos.",
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Residência de Campo — 4 kWp",
    description: "Sistema residencial para casa de campo com estrutura metálica adaptada e proteção extra contra intempéries.",
    imageSrc: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Apartamento Cobertura — 5 kWp",
    description: "Instalação em área privativa de cobertura com análise estrutural e otimização de inclinação para máximo rendimento.",
    imageSrc: "https://images.unsplash.com/photo-1542332213-9b5a5a3af302?auto=format&fit=crop&w=600&q=80"
  },
  {
    title: "Residência Geminada — 3,8 kWp",
    description: "Sistema com 8 módulos de alta eficiência e inversor com conectividade Wi-Fi. Instalação rápida e de baixo impacto visual.",
    imageSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7eed?auto=format&fit=crop&w=600&q=80"
  }
];

export default function Projects() {
    const [projects, setProjects] = useState<PortfolioItem[]>(FALLBACK_PROJECTS);

    useEffect(() => {
        async function loadProjects() {
            try {
                const data = await getPortfolios();
                if (data && data.length > 0) {
                    setProjects(data);
                    console.log("API de portfólios carregada com sucesso.");
                } else {
                    console.info("API retornou lista vazia de portfólios. Usando dados mockados de fallback.");
                }
            } catch (error) {
                console.warn("API de portfólios indisponível, usando fallback mockado local:", error);
            }
        }
        loadProjects();
    }, []);

    return (
        <div id='projetos' className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Nossos <span className={styles.highlight}>Projetos</span></h1>
                
                <div className={styles.projectsGrid}>
                    {projects.map((project, idx) => (
                        <div key={`${project.title}-${idx}`} className={styles.projectCard}>
                            <img src={project.imageSrc} alt={project.title} className={styles.projectImage} />
                            <div className={styles.projectContent}>
                                <h3 className={styles.projectTitle}>{project.title}</h3>
                                <p className={styles.projectDescription}>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}