
import { useState } from 'react'
import { FormCalcAge } from './components/FormCalcAge'
import { isValid } from 'date-fns'
import { differenceInCalendarDays } from 'date-fns'
import { differenceInYears } from 'date-fns'
import { differenceInMonths } from 'date-fns'
import { differenceInWeeks } from 'date-fns'
import { differenceInHours } from 'date-fns'
import { differenceInMinutes } from 'date-fns'
import { differenceInSeconds } from 'date-fns'
import { RenderResults } from './components/RenderResults'
import './App.css'
import { Results } from './components/types'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import ConfigWheel from './components/Icons/ConfigWheel'

function App () {
  const [results, setResults] = useState<Results>({
    daysAlive: 0,
    yearsAlive: 0,
    monthsAlive: 0,
    weeksAlive: 0,
    hoursAlive: 0,
    minutesAlive: 0,
    secondsAlive: 0

  })
  const [futureDate, setFutureDate] = useState<boolean>(false)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFutureDate(false)
    const data = new FormData(e.currentTarget)
    const date = data.get('date')
    if (!date) {
      //alert('No hay fecha')
      return
    }
    //const today = new Date()
    const birthDate = new Date(date as string)
    const isValidDate = isValid(birthDate)
    if (!isValidDate) {
      //alert('Fecha invalida')
      return
    }
    const today = new Date()

    const daysAlive = differenceInCalendarDays(today, birthDate)
    const yearsAlive = differenceInYears(today, birthDate)
    const monthsAlive = differenceInMonths(today, birthDate)
    const weeksAlive = differenceInWeeks(today, birthDate)
    const hoursAlive = differenceInHours(today, birthDate)
    const minutesAlive = differenceInMinutes(today, birthDate)
    const secondsAlive = differenceInSeconds(today, birthDate)
    if (daysAlive < 0) {
      setFutureDate(true)
      return;
    }
    setResults({
      daysAlive,
      yearsAlive,
      monthsAlive,
      weeksAlive,
      hoursAlive,
      minutesAlive,
      secondsAlive
    })

  }


  return (
    <div className='container-app'>
      <Header />
      <main>

        <section className='section-container-form'>
          <FormCalcAge onSubmit={handleSubmit} />
        </section>
        <section>
          <RenderResults results={results} futureDate={futureDate} />

        </section>

      </main>

      <Footer />
    </div>
  )
}

export default App
