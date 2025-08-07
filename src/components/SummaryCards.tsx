import type { FC } from 'react'
import type { CellTower } from '../types'

interface SummaryCardsProps {
  data: CellTower[]
}

const SummaryCards: FC<SummaryCardsProps> = ({ data }) => {
  const total = data.length
  const active = data.filter(t => t.status === 'active').length
  const averageSignal = total
    ? (data.reduce((sum, t) => sum + t.signalStrength, 0) / total).toFixed(2)
    : '0'

  return (
    <div className="summary-cards">
      <div className="card">
        <div className="card-title">Total Towers</div>
        <div className="card-value">{total}</div>
      </div>
      <div className="card">
        <div className="card-title">Active Towers</div>
        <div className="card-value">{active}</div>
      </div>
      <div className="card">
        <div className="card-title">Average Signal</div>
        <div className="card-value">{averageSignal}</div>
      </div>
    </div>
  )
}

export default SummaryCards