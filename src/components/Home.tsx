import Header from "./Header";
import Hero from "./Hero";
import styles from '../styles/Home.module.css';
import logo from '../assets/react.svg';

export default function Home() {
    return (
        <div className={styles.container}>
            <Header logoSrc={logo} />
            <Hero 
                subtitle="Economize, valorize seu imóvel e contribua para um mundo mais sustentável com a Solarize."
                imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"/>
        </div>
    );
}