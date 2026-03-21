import styles from '../styles/Budget.module.css';
import { FaArrowCircleRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import BudgetService from '../services/budgetService';
import ViaCepService from '../services/viaCepService';
import type { PreBudgetResponse } from '../interfaces/PreBudget';


const budgetService = new BudgetService();
const viaCepService = new ViaCepService();

export default function Budget() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [consumption, setConsumption] = useState('');

    const [budgetResult, setBudgetResult] = useState<PreBudgetResponse | null>(null);

    const [awaitingContact, setAwaitingContact] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const address = await viaCepService.requestAddress(zipCode);

        if (!address) {
            alert('CEP inválido. Por favor, verifique e tente novamente.');
            return;
        }

        const preBudget = await budgetService.requestPreBudget({
            firstName,
            lastName,
            email,
            phone,
            monthlyBill: consumption,
            address: {
                postalCode: zipCode,
                streetName: address.logradouro,
                neighborhood: address.bairro,
                city: address.localidade,
                state: address.uf,
                type: 'RESIDENTIAL'
            }
        });

        setBudgetResult(preBudget);
    }

    useEffect(() => {
        console.log(budgetResult);
    }, [budgetResult]);

    const cepMask = (e: React.ChangeEvent<HTMLInputElement>) => {
        const cep = e.target.value
            .replace(/\D/g, '')
            .slice(0, 8)
            .replace(/(\d{5})(\d)/, '$1-$2');

        const handleChange = () => {
            setZipCode(cep);
        }

        handleChange();
    }

    const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
        const formatPhone = (value: string) => {
            const numbers = value.replace(/\D/g, '').slice(0, 11);

            if (numbers.length <= 10) {
                return numbers
                    .replace(/(\d{2})(\d)/, '($1) $2')
                    .replace(/(\d{4})(\d)/, '$1-$2');
            }

            return numbers
                .replace(/(\d{2})(\d)/, '($1) $2')
                .replace(/(\d{5})(\d)/, '$1-$2');
        };

        const formattedPhone = formatPhone(e.target.value);
        setPhone(formattedPhone);
    }


    function handleContact() {
        const service = async () => {
            if (!budgetResult) return;
            try {
                await budgetService.awaitContact(budgetResult.projectId);
                setAwaitingContact(true);
            } catch (error) {
                alert('Erro ao solicitar contato. Por favor, tente novamente mais tarde.');
            }
        }

        service();
    }

    return (
        <section className={styles.container}>
            {!budgetResult &&
                <main className={styles.main}>
                    <div className={styles.wrapper}>

                        <div className={styles.textBlock}>
                            <h2 className={styles.title}>Orçamento <span className={styles.highlight}>Inicial</span></h2>
                            <p className={styles.subtitle}>
                                Solicite seu orçamento preenchendo os campos.
                                Trabalhamos com prazos flexíveis e oferecemos
                                as melhores  condições do mercado. <br /> Entre em contato conosco!
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

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.field}>
                                <label htmlFor="nome">Nome</label>
                                <input id="nome" name="nome" type="text" placeholder="Nome" required value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="sobrenome">Sobrenome</label>
                                <input id="sobrenome" name="sobrenome" type="text" placeholder="Sobrenome" required value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="email">Email</label>
                                <input id="email" name="email" type="email" placeholder="exemplo@email.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="telefone">Telefone</label>
                                <input id="telefone" name="telefone" type="tel" placeholder="(00) 00000-0000" required value={phone} onChange={phoneMask} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="cep">CEP</label>
                                <input id="cep" name="cep" type="text" placeholder="00000-000" required value={zipCode} onChange={cepMask} />
                            </div>
                            <div className={styles.field}>
                                <label htmlFor="consumo">Consumo médio da conta de luz</label>
                                <input id="consumo" name="consumo" type="number" placeholder="Ex: 350,00" value={consumption} onChange={(e) => setConsumption(e.target.value)} />
                            </div>

                            <button className={styles.submit} type="submit">Pedir orçamento</button>
                        </form>
                    </div>
                </main>
            }

            {
                budgetResult &&
                <div className={styles.textBlock}>
                    <h2 className={styles.title}><span className={styles.highlight}>Resultado</span> do Orçamento</h2>
                    <p className={styles.subtitle}>Confira abaixo as estimativas iniciais para o seu sistema de energia solar. Entre em contato com nossos especialistas para uma análise detalhada!</p>

                    <div className={styles.resultContent}>
                        <div className={styles.boxWraper}>
                            <div>
                                <h1 className={styles.boxTitle}>Estimativas Iniciais</h1>
                                <p className={styles.boxSubTitle}>Valores baseados nas informações fornecidas anteriormente:</p>
                            </div>

                            <div className={styles.resultContainer}>
                                <div className={styles.resultBox}>
                                    <h2 className={styles.resultTitle}>Potencia Estimada</h2>
                                    <p className={styles.resultValue}>{budgetResult.kwp.toFixed(2) + " kWp"}</p>
                                </div>
                                <div className={styles.resultBox}>
                                    <h2 className={styles.resultTitle}>Investimento Estimado</h2>
                                    <p className={styles.resultValue}>{budgetResult.cost.toLocaleString("pt-bt", { style: "currency", currency: "BRL" })}</p>
                                </div>
                                <div className={styles.resultBox}>
                                    <h2 className={styles.resultTitle}>Economia Estimada</h2>
                                    <p className={styles.resultValue}>{(budgetResult.cost / (budgetResult.paybackYears * 12)).toLocaleString("pt-bt", { style: "currency", currency: "BRL" })}</p>
                                </div>
                                <div className={styles.resultBox}>
                                    <h2 className={styles.resultTitle}>Retorno do Investimento</h2>
                                    <p className={styles.resultValue}>{budgetResult.paybackYears.toFixed(1)} anos</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.contactWrapper}>
                            <button disabled={awaitingContact} className={styles.contactMe} onClick={handleContact}>
                                {awaitingContact ? 'Contato solicitado!' : 'Entre em contato comigo!'}
                            </button>
                        </div>
                    </div>
                </div>
            }
        </section>
    );
}