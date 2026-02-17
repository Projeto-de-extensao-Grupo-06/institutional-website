import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import styles from '../styles/Footer.module.css';
import logo from '../assets/SolarWayLogo.png';


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logo}>
            <img src={logo} alt="SolarWay Logo" />
          </div>

          <nav className={styles.nav}>
            <ul className={styles.linkList}>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#beneficios">Benefícios</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#projetos">Projetos</a></li>
            </ul>
          </nav>

          <div className={styles.social}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}><FaFacebook /></a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className={styles.socialIcon}><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <div className={styles.container}>
          <p>&copy; 2025 SolarWay. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}