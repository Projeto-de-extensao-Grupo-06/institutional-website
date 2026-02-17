import { FaProjectDiagram, FaScrewdriver} from 'react-icons/fa';
import styles from '../styles/Somethings.module.css';
import {  FaPeopleGroup } from 'react-icons/fa6';

export default function Somethings() {
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <div className={styles.content}>
                    <div className={styles.something}>
                        <div className={styles.icone}> <FaPeopleGroup/></div>
                        <div>
                            <h3 className={styles.subtitle}>+500 <br/>Clientes Satisfeitos</h3>
                            <p className={styles.text}>
                                Familías que já economizam com a energia solar.
                            </p>
                        </div>
                    </div>
                    <div className={styles.something}>
                        <div className={styles.icone}><FaScrewdriver/></div>
                        <div>
                            <h3 className={styles.subtitle}>+10 Anos <br/>de experiência</h3>
                            <p className={styles.text}>
                                Empresa séria e consolidada no mercado.
                            </p>
                        </div>
                    </div>
                    <div className={styles.something}>
                        <div className={styles.icone}><FaProjectDiagram/></div>
                        <div>
                            <h3 className={styles.subtitle}>+500 <br/>Projetos Realizados</h3>
                            <p className={styles.text}>
                                Projetos de energia solar para residências.
                            </p>
                        </div>
                    </div>
                </div>

            </main>
        </div>
    );
}   