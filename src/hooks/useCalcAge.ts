import { useState } from 'react'
import { Results } from '../components/types'
import { isValid } from 'date-fns'
import { differenceInCalendarDays } from 'date-fns'
import { differenceInYears } from 'date-fns'
import { differenceInMonths } from 'date-fns'
import { differenceInWeeks } from 'date-fns'
import { differenceInHours } from 'date-fns'
import { differenceInMinutes } from 'date-fns'
export const useCalcAge = () => {
  const [results, setResults] = useState<Results>({
    daysAlive: 0,
    yearsAlive: 0,
    monthsAlive: 0,
    weeksAlive: 0,
    hoursAlive: 0,
    minutesAlive: 0,
  })
  const [futureDate, setFutureDate] = useState<boolean>(false)
  const [invalidDate, setInvalidDate] = useState(false)
  const resetResults = () => {
    setResults({
      daysAlive: 0,
      yearsAlive: 0,
      monthsAlive: 0,
      weeksAlive: 0,
      hoursAlive: 0,
      minutesAlive: 0,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    resetResults()
    setFutureDate(false)
    setInvalidDate(false)
    const data = new FormData(e.currentTarget)
    const date = data.get('date')

    if (!date) {
      //alert('No hay fecha')
      return
    }

    const birthDate = new Date(date as string)
    const isValidDate = isValid(birthDate)
    if (!isValidDate) {
      setInvalidDate(true)
      return
    }
    const today = new Date()

    const daysAlive = differenceInCalendarDays(today, birthDate)
    const yearsAlive = differenceInYears(today, birthDate)
    const monthsAlive = differenceInMonths(today, birthDate)
    const weeksAlive = differenceInWeeks(today, birthDate)
    const hoursAlive = differenceInHours(today, birthDate)
    const minutesAlive = differenceInMinutes(today, birthDate)
    console.log('daysAlive', daysAlive);

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

    })

  }
  return {
    results,
    futureDate,
    handleSubmit,
    invalidDate
  }
}