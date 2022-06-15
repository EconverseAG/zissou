import {useState} from 'react';
import useMobile from '../../hooks/useMobile';
import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './EntregaFutura.module.scss';

export default function EntregaFutura() {
  const {isMobile} = useMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [inputDate, setInputDate] = useState('');
  const [step, setStep] = useState(1);
  const date = new Date();

  const handleDate = (e) => {
    setInputDate(e.target.value);
  };

  const dateToCompare = new Date(inputDate);

  const compare1Months = (date) => {
    const dateToCompare = new Date(date);
    const newDate = new Date(
      dateToCompare.setMonth(dateToCompare.getMonth() + 1),
    );
    return newDate;
  };

  const compare2Months = (date) => {
    const dateToCompare = new Date(date);
    const newDate = new Date(
      dateToCompare.setMonth(dateToCompare.getMonth() + 2),
    );
    return newDate;
  };

  return (
    <div className={styles.EntregaFuturaContainer}>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className={styles.OpenModal}
        >
          Não tem pressa para receber?
          <br />
          Ganhe descontos de até 10%
        </button>
      ) : (
        <div className={styles.EntregaModal}>
          <button className={styles.Close} onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={10.707}
              height={10.707}
              viewBox="0 0 10.707 10.707"
            >
              <g
                id="Componente_26_1"
                data-name="Componente 26 \u2013 1"
                transform="translate(0.354 0.354)"
              >
                <line
                  id="Linha_6"
                  data-name="Linha 6"
                  x2={10}
                  y2={10}
                  fill="none"
                  stroke="#707070"
                  strokeWidth={1}
                />
                <line
                  id="Linha_7"
                  data-name="Linha 7"
                  x1={10}
                  y2={10}
                  fill="none"
                  stroke="#707070"
                  strokeWidth={1}
                />
              </g>
            </svg>
          </button>
          <strong className={styles.EntregaModalTitle}>
            SE NÃO TIVER PRESSA PARA RECEBER SEU COLCHÃO {!isMobile && <br />}
            ZISSOU, APROVEITE DESCONTOS ADICIONAIS:
          </strong>
          {step == 1 ? (
            <>
              <div className={styles.SimulateOffer}>
                <span className={styles.SimulateOfferTitle}>
                  Insira a data ideal para receber o seu colchão e obtenha a
                  melhor oferta
                </span>
                <div className={styles.SimulateOfferDates}>
                  <input
                    type={'date'}
                    placeholder={date.toLocaleDateString()}
                    value={inputDate}
                    onChange={handleDate}
                    className={styles.SimulateOfferInput}
                  />
                  <button
                    className={styles.SimulateOfferButton}
                    onClick={() => setStep('2')}
                  >
                    Simular Oferta
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className={styles.ChosenDate}>
                <span className={styles.ChosenDateText}>
                  {inputDate.split('-')[2] +
                    '/' +
                    inputDate.split('-')[1] +
                    '/' +
                    inputDate.split('-')[0]}
                </span>
              </div>
              <span className={styles.DiscountText}>
                Para a entrega na data selecionada, {!isMobile && <br />} você
                pode comprar o seu Colchão Zissou com:
              </span>
              {dateToCompare < compare1Months(date) ? (
                <strong
                  className={styles.DiscountValue}
                  style={{fontSize: '20px'}}
                >
                  PRONTA-ENTREGA E FRETE GRÁTIS :)
                </strong>
              ) : dateToCompare > compare1Months(date) &&
                dateToCompare < compare2Months(date) ? (
                <strong className={styles.DiscountValue}>5% OFF</strong>
              ) : (
                <strong className={styles.DiscountValue}>10% OFF</strong>
              )}
              <ZissouAddToCart
                className={styles.addToCartSimulate}
                Date={
                  inputDate.split('-')[2] +
                  '/' +
                  inputDate.split('-')[1] +
                  '/' +
                  inputDate.split('-')[0]
                }
                is5OFF={
                  dateToCompare > compare1Months(date) &&
                  dateToCompare < compare2Months(date)
                }
                is10OFF={dateToCompare > compare2Months(date)}
              />
              <span className={styles.TeamSuport}>
                Lembrando que nosso time entrará em contato{' '}
                {!isMobile && <br />} logo após sua compra para combinar tudo
                direitinho ;)
              </span>
              <button
                className={styles.LowerDeadline}
                onClick={() => setStep('1')}
              >
                Voltar e simular novamente
              </button>
            </>
          )}
          <button
            className={styles.LowerDeadline}
            onClick={() => setIsOpen(!isOpen)}
          >
            Quero o menor prazo
          </button>
        </div>
      )}
    </div>
  );
}
