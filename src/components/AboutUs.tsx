import styles from '../styles/AboutUs.module.css';

export default function AboutUs() {
    return (
        <div id="sobre" className={styles.container}>
            <main className={styles.main}>

                <div className={styles.content}>

                    <h2 className={styles.title}>
                        A <strong className={styles.highlight}>Energia</strong><br /> que nos <strong className={styles.highlight}>move</strong>
                    </h2>

                    <div className={styles.image}>
                        <img src="src/assets/Painel solar ao pôr do sol.png" alt="No que acreditamos" />
                    </div>

                </div>

                <div className={styles.position}>

                    <h2 className={styles.title}>
                        No que <strong className={styles.highlight}>acreditamos</strong>
                    </h2>

                    <div className={styles.text}>
                        <p>
                            Na SolarWay, somos mais que uma empresa de energia solar. 
                            Somos a ponte entre você e um futuro mais inteligente e sustentável.
                        </p>
                        <p>
                            Acreditamos que a verdadeira energia não vem apenas do sol, 
                            mas da liberdade de controlar seu próprio consumo. Por isso,
                            nossa missão é oferecer soluções que transformam a maneira 
                            como você se relaciona com a eletricidade, trazendo economia
                            e valorização real para seu imóvel.
                        </p>
                    </div>
                </div>
                                
            </main>
        </div>
    );
}