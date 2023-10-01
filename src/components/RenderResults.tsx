import { Results } from './types'
import styles from './RenderResults.module.css'
interface RenderResultsProps {
  results: Results,
  futureDate: boolean,
  invalidDate: boolean
}
export const RenderResults = ({ results, futureDate, invalidDate }: RenderResultsProps) => {


  return (
    <div>
      {results.minutesAlive && !futureDate ? (
        <div>
          <h2>Tiempo vivido en: </h2>
          <ul className={styles.listResults}>
            <li>Días: {results.daysAlive}</li>
            <li>Años: {results.yearsAlive}</li>
            <li>Meses: {results.monthsAlive}</li>
            <li>Semanas: {results.weeksAlive}</li>
            <li>Horas: {results.hoursAlive}</li>
            <li>Minutos: {results.minutesAlive}</li>
          </ul>
        </div>
      ) : null}
      {futureDate && (
        <div>
          <h2>La fecha ingresada no puede ser del futuro</h2>
        </div>
      )}
      {invalidDate && (
        <div>
          <h2>La fecha ingresada es inválida</h2>
        </div>
      )}
    </div>
  )
}