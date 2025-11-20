import styles from '../styles/Header.module.css';
import type HeaderProps from '../interfaces/properties/HeaderProps';

export default function Header({logoSrc}: HeaderProps) {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src={logoSrc} alt="Logo da Solarize" />
        </div>
        <nav className={styles.nav}>
          <a href="#inicio" className={`${styles.navLink} ${styles.active}`}>Início</a>
          <a href="#beneficios" className={styles.navLink}>Benefícios</a>
          <a href="#sobre" className={styles.navLink}>Sobre Nós</a>
          <a href="#projetos" className={styles.navLink}>Projetos</a>
        </nav>
        <button className={styles.ctaButton}>Faça seu orçamento já</button>
    </header>
  );
}