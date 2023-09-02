import { Results } from './types'

interface RenderResultsProps {
  results: Results,
  futureDate: boolean
}
export const RenderResults = ({ results, futureDate }: RenderResultsProps) => {
  console.log(" results:", results)
  return (
    <div>RenderResults</div>
  )
}