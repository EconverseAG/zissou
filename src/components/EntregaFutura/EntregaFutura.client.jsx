import {useState} from 'react';
import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './EntregaFutura.module.scss';

export default function EntregaFutura() {
  const [isOpen, setIsOpen] = useState(false);
  const date = new Date();
  const datePlusTenDays = new Date(date.getTime() + 10 * 24 * 60 * 60 * 1000);

  const get1Months = (day) => {
    const date = new Date(day);
    const newDate = new Date(date.setMonth(date.getMonth() + 1));
    return (
      newDate.getDate() +
      '/' +
      newDate
        .toLocaleString('default', {month: 'long'})
        .toUpperCase()
        .substr(0, 3)
    );
  };
  const get2Months = (day) => {
    const date = new Date(day);
    const newDate = new Date(date.setMonth(date.getMonth() + 2));
    return (
      newDate.getDate() +
      '/' +
      newDate
        .toLocaleString('default', {month: 'long'})
        .toUpperCase()
        .substr(0, 3)
    );
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
          Ganhe descontos adicionais
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
            SE NÃO TIVER PRESSA PARA RECEBER SEU COLCHÃO <br /> ZISSOU,
            APROVEITE DESCONTOS ADICIONAIS
          </strong>
          <div className={styles.EntregaModalDates}>
            <div className={styles.ThirtyDays}>
              <span className={styles.DaysTitle}>
                Entregas entre
                <br />
                <strong className={styles.Bolder}>
                  {get1Months(date)} E {get1Months(datePlusTenDays)}
                </strong>
              </span>
              <ZissouAddToCart
                text="Compre com 5% de desconto"
                className={styles.ButtonCTA}
              />
            </div>
            <div className={styles.Line} />
            <div className={styles.SixtyDays}>
              <span className={styles.DaysTitle}>
                Entregas entre
                <br />
                <strong className={styles.Bolder}>
                  {get2Months(date)} E {get2Months(datePlusTenDays)}
                </strong>
              </span>
              <ZissouAddToCart
                text="Compre com 10% de desconto"
                className={styles.ButtonCTA}
              />
            </div>
          </div>
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
