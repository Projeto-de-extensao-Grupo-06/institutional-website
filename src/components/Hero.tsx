import styles from "../styles/Hero.module.css";
import type HeroProps from "../interfaces/properties/HeroProps";
import { FaArrowRight } from "react-icons/fa";

export default function Hero({subtitle, imageSrc}: HeroProps) {
  return (
    <main id="inicio" className={styles.main}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Energia <span className={styles.highlight}>limpa</span> para um<br />
            futuro <span className={styles.highlight}>sustentável</span>
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.buttons}>
            <button 
              className={styles.primaryButton}
              onClick={() => document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Descubra como funciona <FaArrowRight/>
            </button>
            <button 
              className={styles.secondaryButton}
              onClick={() => document.getElementById('orcamento')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contato
            </button>
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