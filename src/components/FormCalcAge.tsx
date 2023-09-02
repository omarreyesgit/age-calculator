
import styles from './FormCalcAge.module.css'

interface FormCalcAgeProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
export const FormCalcAge = ({ onSubmit }: FormCalcAgeProps) => {

  return (
    <form onSubmit={onSubmit} className={styles.form} >
      <div className={styles.inputBox}>

        <label htmlFor="date">
          Fecha de nacimiento
        </label>
        <input required type="date" name='date' id='date' className={styles.inputDate} />
      </div>
      <button>Calcular</button>
    </form>
  )
}