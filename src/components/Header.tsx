import styles from './Header.module.css'
import ConfigWheel from './Icons/ConfigWheel'
export const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Calculadora de edad</h1>



      <ConfigWheel fill='yellow' />


    </header>
  )
}