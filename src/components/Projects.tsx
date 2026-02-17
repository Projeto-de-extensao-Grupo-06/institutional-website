import styles from '../styles/Projects.module.css';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        },
        {
            id: 2,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        },
        {
            id: 3,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        },
        {
            id: 4,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        },
        {
            id: 5,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        },
        {
            id: 6,
            title: "Titulo",
            description: "Descrição curta para projeto...",
            image: "https://cdn2.cardume.digital/public/sites/nexen/images/posts/139/entenda-as-vantagens-da-energia-solar-e-suas-aplicacoes-62cdb6ae05a02.jpg"
        }
    ];

    return (
        <div id='projetos' className={styles.container}>
            <main className={styles.main}>
                <h1 className={styles.title}>Nossos <span className={styles.highlight}>Projetos</span></h1>
                
                <div className={styles.projectsGrid}>
                    {projects.map((project) => (
                        <div key={project.id} className={styles.projectCard}>
                            <img src={project.image} alt={project.title} className={styles.projectImage} />
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