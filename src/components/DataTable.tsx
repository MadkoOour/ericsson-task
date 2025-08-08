import type { CellTower } from '../schema/types'
import '../styles/DataTable.scss'

interface DataTableProps {
  data: CellTower[]
}

const DataTable = ({ data }:DataTableProps) => {
  if (data.length === 0) {
    return <div className="no-data">No matching data found.</div>
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>Network Type</th>
          <th>Status</th>
          <th>Signal Strength</th>
        </tr>
      </thead>
      <tbody>
        {data.map(t => (
          <tr key={t.id}>
            <td>{t.name}</td>
            <td>{t.city}</td>
            <td>{t.networkType}</td>
            <td>{t.status}</td>
            <td>{t.signalStrength}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable