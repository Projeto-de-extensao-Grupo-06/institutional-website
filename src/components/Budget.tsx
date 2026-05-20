import styles from '../styles/Budget.module.css';
import { FaArrowCircleRight, FaChevronDown } from 'react-icons/fa';
import { useEffect, useRef, useState } from 'react';
import BudgetService from '../services/budgetService';
import ViaCepService from '../services/viaCepService';
import type { PreBudgetResponse } from '../interfaces/PreBudget';

const budgetService = new BudgetService();
const viaCepService = new ViaCepService();

// ── Custom Select ────────────────────────────────────────────────────────────
interface SelectOption { label: string; value: string; }

interface CustomSelectProps {
    id: string;
    placeholder: string;
    options: SelectOption[];
    value: string;
    onChange: (value: string) => void;
}

function CustomSelect({ id, placeholder, options, value, onChange }: CustomSelectProps) {
    const [open, setOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    const selected = options.find(o => o.value === value);

    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div
            id={id}
            ref={ref}
            className={`${styles.customSelect} ${open ? styles.customSelectOpen : ''}`}
            onClick={() => setOpen(prev => !prev)}
            role="combobox"
            aria-expanded={open}
            aria-haspopup="listbox"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setOpen(prev => !prev); }}
        >
            <span className={selected ? styles.customSelectValue : styles.customSelectPlaceholder}>
                {selected ? selected.label : placeholder}
            </span>
            <FaChevronDown className={`${styles.customSelectChevron} ${open ? styles.chevronOpen : ''}`} />

            {open && (
                <ul className={styles.customSelectDropdown} role="listbox">
                    {options.map(opt => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            className={`${styles.customSelectOption} ${opt.value === value ? styles.customSelectOptionActive : ''}`}
                            onClick={(e) => { e.stopPropagation(); onChange(opt.value); setOpen(false); }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
// ─────────────────────────────────────────────────────────────────────────────

const propertyOptions: SelectOption[] = [
    { label: 'Casa Térrea',        value: 'PROPERTY_TYPE_CASA_TERREA' },
    { label: 'Sobrado',            value: 'PROPERTY_TYPE_SOBRADO'     },
    { label: 'Prédio / Comercial', value: 'PROPERTY_TYPE_PREDIO'      },
];

const roofOptions: SelectOption[] = [
    { label: 'Metálico',     value: 'ROOF_TYPE_METALICO'     },
    { label: 'Cerâmico',     value: 'ROOF_TYPE_CERAMICO'     },
    { label: 'Fibrocimento', value: 'ROOF_TYPE_FIBROCIMENTO' },
    { label: 'Laje',         value: 'ROOF_TYPE_LAJE'         },
];

export default function Budget() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [consumption, setConsumption] = useState('');
    const [propertyType, setPropertyType] = useState('');
    const [roofType, setRoofType] = useState('ROOF_TYPE_LAJE');

    const [budgetResult, setBudgetResult] = useState<PreBudgetResponse | null>(null);
    const [awaitingContact, setAwaitingContact] = useState(false);

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        if (!propertyType || !roofType) {
            alert('Por favor, selecione o tipo de imóvel e o tipo de telhado.');
            return;
        }

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
            propertyType,
            roofType,
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
        setZipCode(cep);
    };

    const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
        const numbers = e.target.value.replace(/\D/g, '').slice(0, 11);
        const formatted = numbers.length <= 10
            ? numbers.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{4})(\d)/, '$1-$2')
            : numbers.replace(/(\d{2})(\d)/, '($1) $2').replace(/(\d{5})(\d)/, '$1-$2');
        setPhone(formatted);
    };

    function handleContact() {
        const service = async () => {
            if (!budgetResult) return;
            try {
                await budgetService.awaitContact(budgetResult.projectId);
                setAwaitingContact(true);
            } catch {
                alert('Erro ao solicitar contato. Por favor, tente novamente mais tarde.');
            }
        };
        service();
    }

    return (
        <section id="orcamento" className={styles.container}>
            {!budgetResult &&
                <main className={styles.main}>
                    <div className={styles.wrapper}>

                        <div className={styles.textBlock}>
                            <h2 className={styles.title}>Orçamento <span className={styles.highlight}>Inicial</span></h2>
                            <p className={styles.subtitle}>
                                Solicite seu orçamento preenchendo os campos.
                                Trabalhamos com prazos flexíveis e oferecemos
                                as melhores condições do mercado. <br /> Entre em contato conosco!
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
                                <label htmlFor="consumo">Consumo médio (kWh/mês)</label>
                                <input id="consumo" name="consumo" type="number" placeholder="Ex: 350" value={consumption} onChange={(e) => setConsumption(e.target.value)} />
                            </div>
                            <div className={styles.field}>
                                <label>Tipo de Imóvel</label>
                                <CustomSelect
                                    id="propertyType"
                                    placeholder="Selecione o tipo de imóvel"
                                    options={propertyOptions}
                                    value={propertyType}
                                    onChange={setPropertyType}
                                />
                            </div>
                            <div className={styles.field}>
                                <label>Tipo de Telhado</label>
                                <CustomSelect
                                    id="roofType"
                                    placeholder="Selecione o tipo de telhado"
                                    options={roofOptions}
                                    value={roofType}
                                    onChange={setRoofType}
                                />
                            </div>

                            <button className={styles.submit} type="submit">Pedir orçamento</button>
                        </form>
                    </div>
                </main>
            }

            {budgetResult &&
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