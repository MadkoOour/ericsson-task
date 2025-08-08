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
        {data.map(tower => (
          <tr key={tower.id}>
            <td>{tower.name}</td>
            <td>{tower.city}</td>
            <td>{tower.networkType}</td>
            <td className={tower.status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive'}>
              {tower.status}
            </td>
            <td>{tower.signalStrength}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable