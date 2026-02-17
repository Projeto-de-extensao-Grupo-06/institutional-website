import styles from '../styles/Budget.module.css';
import { FaArrowCircleRight} from 'react-icons/fa';

export default function Budget() {
    return (
        <section className={styles.container}>
            <main className={styles.main}>
                <div className={styles.wrapper}>

                    <div className={styles.textBlock}>
                        <h2 className={styles.title}>Orçamento <span className={styles.highlight}>Inicial</span></h2>
                        <p className={styles.subtitle}>
                            Solicite seu orçamento preenchendo os campos.  
                            Trabalhamos com prazos flexíveis e oferecemos 
                            as melhores  condições do mercado. <br/> Entre em contato conosco!
                        </p>
                        <ul className={styles.list}>
                            <li className={styles.listItem}>
                                <span className={styles.icon}><FaArrowCircleRight /></span>
                                <span>A Economia de até 95% na conta de energia elétrica</span>
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.icon}><FaArrowCircleRight /></span>
                                <span>Instalação residencial, comercial, industrial e rural</span>
                            </li>
                            <li className={styles.listItem}>
                                <span className={styles.icon}><FaArrowCircleRight /></span>
                                <span>Oferecemos garantia de 10 anos</span>
                            </li>
                        </ul>
                    </div>

                    <form className={styles.form}>
                        <div className={styles.field}>
                            <label htmlFor="nome">Nome</label>
                            <input id="nome" name="nome" type="text" placeholder="Nome" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="sobrenome">Sobrenome</label>
                            <input id="sobrenome" name="sobrenome" type="text" placeholder="Sobrenome" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="email">Email</label>
                            <input id="email" name="email" type="email" placeholder="exemplo@email.com" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="telefone">Telefone</label>
                            <input id="telefone" name="telefone"  type="tel" placeholder="(00) 00000-0000" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="cep">CEP</label>
                            <input id="cep" name="cep" type="text" placeholder="00000-000" required />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="consumo">Consumo médio da conta de luz</label>
                            <input id="consumo" name="consumo" type="number" placeholder="Ex: 350,00" />
                        </div>
                         <div className={styles.field}>
                            <label htmlFor="instalacao">Tipo de instalação</label>
                            <input id="instalacao" name="instalacao" type="text" placeholder="Tipo" />
                        </div>
                        <div className={styles.field}>
                            <label htmlFor="telhado">Tipo de telhado</label>
                            <input id="telhado" name="telhado" type="text" placeholder="Tipo" />
                        </div>

                        <button className={styles.submit} type="submit">Pedir orçamento</button>
                    </form>
                </div>
            </main>
        </section>
    );
}