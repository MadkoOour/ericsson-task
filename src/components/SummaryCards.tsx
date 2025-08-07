import Card from './Card'
import type { CellTower } from '../schema/types'

interface SummaryCardsProps {
  data: CellTower[]
}

const SummaryCards = ({ data }:SummaryCardsProps) => {
  const total = data.length
  const active = data.filter(t => t.status === 'active').length
  const averageSignal = total
    ? (data.reduce((sum, t) => sum + t.signalStrength, 0) / total).toFixed(2)
    : '0'

  return (
    <div className="summary-cards">
      <Card title="Total Towers" value={total} />
      <Card title="Active Towers" value={active} />
      <Card title="Average Signal" value={averageSignal} />
    </div>
  )
}

export default SummaryCards