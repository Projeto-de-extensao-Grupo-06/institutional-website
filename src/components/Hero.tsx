import styles from "../styles/Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Energia <span className={styles.highlight}>limpa</span> para um<br />
            futuro <span className={styles.highlight}>sustentável</span>
          </h1>
          <p className={styles.subtitle}>
            Economize, valorize seu imóvel e contribua para um mundo<br />
            mais sustentável com a Solarize.
          </p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              Descubra como funciona →
            </button>
            <button className={styles.secondaryButton}>Contato</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80" 
            alt="Painéis solares ao pôr do sol" 
            className={styles.heroImage}
          />
        </div>
    </main>
  );
}