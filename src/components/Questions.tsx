import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import styles from '../styles/Questions.module.css';

interface FaqItem {
  question: string;
  answer: string;
}

export default function Questions() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: 'Quanto tempo leva para instalar um sistema de energia solar?',
      answer: 'A instalação completa geralmente leva de 1 a 3 dias, dependendo do tamanho do sistema e da complexidade da instalação. Após a instalação, ainda é necessário aguardar a vistoria e homologação da concessionária, o que pode levar algumas semanas.'
    },
    {
      question: 'Qual é a vida útil dos painéis solares?',
      answer: 'Os painéis solares têm uma vida útil média de 25 a 30 anos, mantendo cerca de 80% de sua eficiência original após esse período. Os inversores geralmente têm garantia de 10 anos e vida útil de 15 a 20 anos.'
    },
    {
      question: 'A energia solar funciona em dias nublados?',
      answer: 'Sim, os painéis solares continuam gerando energia mesmo em dias nublados, porém com menor eficiência. O sistema é dimensionado considerando as variações climáticas da região para garantir economia durante todo o ano.'
    },
    {
      question: 'Em quanto tempo recupero o investimento?',
      answer: 'O tempo de retorno do investimento varia de 4 a 7 anos, dependendo do consumo de energia, tarifa local e tipo de instalação. Após esse período, a economia gerada é praticamente 100% de lucro durante toda a vida útil do sistema.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Perguntas Frequentes</h2>
        <p className={styles.subtitle}>Aqui você pode encontrar as respostas para as dúvidas mais comuns 
                                      sobre nossos serviços. <br/>Se não encontrar o que procura, você pode 
                                      entrar em contato conosco.</p>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index}
              >
                <span>{item.question}</span>
                <span className={styles.icon}>
                  {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>
              {openIndex === index && (
                <div className={styles.answer}>
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}