import { FaDollarSign, FaHome, FaTree } from 'react-icons/fa';
import styles from '../styles/Benefits.module.css';

export default function Benefits() {
    return (
        <div id="beneficios" className={styles.container}>
            <main className={styles.main}>

                <div className={styles.content}>

                    <h1 className={styles.title}>
                        Benefícios que a <br />Energia Solar traz<br />para você.
                    </h1>

                    <div className={styles.beneficio}>
                        <div className={styles.icone}> <FaDollarSign/></div>
                        <div>
                            <h3 className={styles.subtitle}>Economia na conta</h3>
                            <p>
                                Transforme sua <strong className={styles.bad}>despesa</strong> com
                                eletricidade em<br />
                                <strong className={styles.good}>investimento</strong> e diga
                                adeus às contas de luz alta.
                            </p>
                        </div>
                    </div>

                    <div className={styles.beneficio}>
                        <div className={styles.icone}> <FaHome/></div>
                        <div>
                            <h3 className={styles.subtitle}>Valorização do imóvel</h3>
                            <p>
                                A instalação de painéis solares aumenta o valor do seu
                                imóvel, tornando-o mais atrativo para compradores e
                                inquilinos.
                            </p>
                        </div>
                    </div>

                    <div className={styles.beneficio}>
                        <div className={styles.icone}><FaTree/></div>
                        <div>
                            <h3 className={styles.subtitle}>Sustentabilidade</h3>
                            <p>
                                A utilização de energia solar contribui para a preservação
                                do meio ambiente, reduzindo a emissão de gases poluentes e
                                promovendo um futuro mais sustentável.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.image} >
                    <img src="/src/assets/imgBeneficios.png" alt="Imagem de Benefícios" />
                </div>

            </main>
        </div>
    );
}