import Header from "./Header";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Believe from "./AboutUs";
import Somethings from "./Somethings";
import Process from "./Process";
import Projects from "./Projects";
import Budget from "./Budget";
import Questions from "./Questions";
import styles from '../styles/Home.module.css';
import logo from '../assets/SolarWayLogo.png';
import Footer from "./Footer";

export default function Home() {
    return (
        <div className={styles.container}>
            <Header logoSrc={logo} />
            <Hero 
                subtitle="Economize, valorize seu imóvel e contribua para um mundo mais sustentável com a SolarWay."
                imageSrc="https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80"/>
            <Benefits />
            <Believe />
            <Somethings />
            <Process />
            <Projects />
            <Budget />
            <Questions />
            <Footer />
        </div>
    );
}