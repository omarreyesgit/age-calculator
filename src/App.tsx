
import { FormCalcAge } from './components/FormCalcAge'
import { RenderResults } from './components/RenderResults'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { useCalcAge } from './hooks/useCalcAge'
import './App.css'


function App () {

  const { results, futureDate, handleSubmit, invalidDate } = useCalcAge()



  return (
    <div className='container-app'>
      <Header />
      <main>
        <section className='section-container-form'>
          <FormCalcAge onSubmit={handleSubmit} />
        </section>
        <section>
          <RenderResults
            results={results}
            futureDate={futureDate}
            invalidDate={invalidDate} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
