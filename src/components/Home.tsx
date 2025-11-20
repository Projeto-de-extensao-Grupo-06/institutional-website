import Header from "./Header";
import Hero from "./Hero";
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header />
            <Hero />
        </div>
    );
}