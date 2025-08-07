import { useState, useMemo } from 'react'
import './App.scss'
import { cellTowers } from './mock-data/data'
import Sidebar from './components/Sidebar'
import SummaryCards from './components/SummaryCards'
import Filters from './components/Filters'
import DataTable from './components/DataTable'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

function App() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All')
  const [collapsed, setCollapsed] = useState(false)
  const cities = useMemo(
    () => ['All', ...Array.from(new Set(cellTowers.map(t => t.city)))],
    []
  )
  const filtered = useMemo(
    () =>
      cellTowers.filter(
        t =>
          (city === 'All' || t.city === city) &&
          t.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, city]
  )

  return (
    <div className={`dashboard-grid ${collapsed ? 'collapsed' : ''}`}>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(prev => !prev)}
      />

      <main className="dashboard-main">
        <SummaryCards data={filtered} />
        <div className="charts">
          <BarChart data={filtered} />
          <PieChart data={filtered} />
        </div>
        <div className="table-wrap">
          <DataTable data={filtered} />
        </div>
      </main>

      <aside className="dashboard-filters">
        <Filters
          search={search}
          city={city}
          cities={cities}
          onSearchChange={setSearch}
          onCityChange={setCity}
        />
      </aside>
    </div>
  )
}

export default App
