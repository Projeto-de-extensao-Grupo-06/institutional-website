import Header from "./Header";
import Hero from "./Hero";
import styles from '../styles/Home.module.css';
import logo from '../assets/react.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header logoSrc={logo} />
            <Hero />
        </div>
    );
}