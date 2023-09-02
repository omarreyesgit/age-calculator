
import styles from './FormCalcAge.module.css'

interface FormCalcAgeProps {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}
export const FormCalcAge = ({ onSubmit }: FormCalcAgeProps) => {

  return (
    <form onSubmit={onSubmit}>
      <input required type="date" name='date' />
      <button>Calcular</button>
    </form>
  )
}