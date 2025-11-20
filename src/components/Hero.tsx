import styles from "../styles/Hero.module.css";
import type { HeroProps } from "../types/properties/HeroProps";

export default function Hero({subtitle, imageSrc}: HeroProps) {
  return (
    <main className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Energia <span className={styles.highlight}>limpa</span> para um<br />
            futuro <span className={styles.highlight}>sustentável</span>
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>
              Descubra como funciona →
            </button>
            <button className={styles.secondaryButton}>Contato</button>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img 
            src={imageSrc}
            alt="Painéis solares ao pôr do sol" 
            className={styles.heroImage}
          />
        </div>
    </main>
  );
}