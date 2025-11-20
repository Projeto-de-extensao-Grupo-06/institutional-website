import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
          <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='40' viewBox='0 0 60 40'%3E%3Cg%3E%3Ccircle cx='20' cy='15' r='12' fill='%23FF8C00' stroke='%23FF6B00' stroke-width='2'/%3E%3Cpath d='M20 3 L20 8 M20 22 L20 27 M8 15 L13 15 M27 15 L32 15 M11 8 L14 11 M26 20 L29 23 M11 22 L14 19 M26 10 L29 7' stroke='%23FF6B00' stroke-width='2' stroke-linecap='round'/%3E%3C/g%3E%3Ctext x='5' y='38' font-family='Arial, sans-serif' font-size='10' font-weight='bold' fill='%23333'%3ESOLARIZE%3C/text%3E%3C/svg%3E" alt="Solarize Logo" />
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