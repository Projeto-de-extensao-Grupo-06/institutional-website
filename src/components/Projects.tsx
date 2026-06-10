import { useEffect, useState } from 'react';
import type PortfolioItem from '../interfaces/PortfolioItem';
import { getPortfolios } from '../services/portfolioService';
import styles from '../styles/Projects.module.css';

const FALLBACK_PROJECTS: PortfolioItem[] = [
  {
    title: "Residência Térrea — 4,5 kWp",
    description: "Sistema residencial composto por 10 módulos de 450 Wp com inversor monofásico. Redução média de 80% na fatura de energia.",
    imageSrc: `${import.meta.env.BASE_URL}projeto1.avif`
  },
  {
    title: "Casa Sobrado — 5,5 kWp",
    description: "Instalação em telhado de cerâmica com estrutura reforçada e monitoramento via app. Sistema com 12 módulos monocristalinos.",
    imageSrc: `${import.meta.env.BASE_URL}projeto2.jpeg`
  },
  {
    title: "Residência Compacta — 3,2 kWp",
    description: "Projeto compacto ideal para residências com baixo consumo. Utilização de microinversores para maximizar produção.",
    imageSrc: `${import.meta.env.BASE_URL}projeto3.jpg`
  },
  {
    title: "Pequeno Comércio — 7 kWp",
    description: "Instalação para uma pequena loja de bairro visando reduzir custos operacionais. Sistema trifásico com 16 módulos.",
    imageSrc: `${import.meta.env.BASE_URL}projeto4.jpg`
  },
  {
    title: "Residência de Campo — 4 kWp",
    description: "Sistema residencial para casa de campo com estrutura metálica adaptada e proteção extra contra intempéries.",
    imageSrc: `${import.meta.env.BASE_URL}projeto5.jpeg`
  },
  {
    title: "Apartamento Cobertura — 5 kWp",
    description: "Instalação em área privativa de cobertura com análise estrutural e otimização de inclinação para máximo rendimento.",
    imageSrc: `${import.meta.env.BASE_URL}projeto6.webp`
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
                    {projects.map((project, idx) => {
                        const isExternal = project.imageSrc.startsWith('http') || project.imageSrc.startsWith('data:');
                        const imageSrc = isExternal || project.imageSrc.startsWith(import.meta.env.BASE_URL)
                            ? project.imageSrc
                            : `${import.meta.env.BASE_URL}${project.imageSrc.replace(/^\//, '')}`;

                        return (
                            <div key={`${project.title}-${idx}`} className={styles.projectCard}>
                                <img src={imageSrc} alt={project.title} className={styles.projectImage} />
                                <div className={styles.projectContent}>
                                    <h3 className={styles.projectTitle}>{project.title}</h3>
                                    <p className={styles.projectDescription}>{project.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </main>
        </div>
    );
}