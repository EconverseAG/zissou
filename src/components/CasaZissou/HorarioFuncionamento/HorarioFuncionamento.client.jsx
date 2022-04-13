import * as styles from './HorarioFuncionamento.module.scss';

export default function HorarioFuncionamento() {
  return (
    <div className={styles.HorarioFuncionamentoContainer}>
      <Clock />
      <span className={styles.HorarioFuncionamentoText}>
        HORÁRIO DE FUNCIONAMENTO
        <br />
        Seg a Sáb - das 10h às 19h
      </span>
    </div>
  );
}

function Clock() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="68"
      height="68"
      viewBox="0 0 55.668 55.668"
    >
      <g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M27.833,0C12.487,0,0,12.486,0,27.834s12.487,27.834,27.833,27.834    c15.349,0,27.834-12.486,27.834-27.834S43.182,0,27.833,0z M27.833,51.957c-13.301,0-24.122-10.821-24.122-24.123    S14.533,3.711,27.833,3.711c13.303,0,24.123,10.821,24.123,24.123S41.137,51.957,27.833,51.957z"
              fill="#d4a8bf"
            />
            <path
              d="M41.618,25.819H29.689V10.046c0-1.025-0.831-1.856-1.855-1.856c-1.023,0-1.854,0.832-1.854,1.856    v19.483h15.638c1.024,0,1.855-0.83,1.854-1.855C43.472,26.65,42.64,25.819,41.618,25.819z"
              fill="#d4a8bf"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
