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
          <th>#</th>
          <th>Name</th>
          <th>City</th>
          <th>Network Type</th>
          <th>Status</th>
          <th>Signal Strength</th>
        </tr>
      </thead>
      <tbody>
        {data.map((tower, idx) => (
          <tr key={tower.id}>
            <td data-label="#"> {idx + 1} </td>
            <td data-label="Name">{tower.name}</td>
            <td data-label="City">{tower.city}</td>
            <td data-label="Network Type">{tower.networkType}</td>
            <td
              data-label="Status"
              className={tower.status.toLowerCase() === 'active' ? 'status-active' : 'status-inactive'}
            >
              {tower.status}
            </td>
            <td data-label="Signal Strength">{tower.signalStrength}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DataTable