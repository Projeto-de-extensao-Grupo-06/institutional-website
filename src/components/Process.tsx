import { FaHouse } from 'react-icons/fa6';
import styles from '../styles/Process.module.css';
import { FaCubes} from 'react-icons/fa';
import { BsFileBarGraphFill } from 'react-icons/bs';

export default function Process() { 
        return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.title}> Como funciona o nosso processo</div>
               
                <div className={styles.content}>
                    
                    <div className={styles.something}>
                        <h3 className={styles.subtitle}> 01<br/>Consultoria Gratuita</h3>
                        <div className={styles.icone}> <BsFileBarGraphFill/></div>
                        <div>
                            <p className={styles.text}>
                                Analisamos seu perfil de consumo 
                                e fazemos uma visita técnica para 
                                dimensionar o sistema ideal.
                            </p>
                        </div>
                    </div>

                    <div className={styles.something}>
                        <h3 className={styles.subtitle}> 02<br/>Projeto Personalisado</h3>
                        <div className={styles.icone}><FaCubes/></div>
                        <div> 
                            <p className={styles.text}>
                                Desenvolvemos um projeto sob 
                                medida com simulação real de 
                                economia e layout otimizado.
                            </p>
                        </div>
                    </div>

                    <div className={styles.something}>
                        <h3 className={styles.subtitle}> 03<br/>Instalação Profissional</h3>
                        <div className={styles.icone}><FaHouse/></div>
                        <div>
                            <p className={styles.text}>
                                Instalamos o sistema seguindo os 
                                mais altos padrões de qualidade e 
                                segurança.
                            </p>
                        </div>
                    </div>

                </div>

            </main>
        </div>
    );
}