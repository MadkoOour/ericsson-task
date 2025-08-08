import { useState, useMemo } from 'react'
import './styles/App.scss'
import { cellTowers } from './mock-data/data'
import Sidebar from './components/Sidebar'
import SummaryCards from './components/SummaryCards'
import Filters from './components/Filters'
import DataTable from './components/DataTable'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

const App = () => {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All')
  const [status, setStatus] = useState('All')
  const [networkType, setNetworkType] = useState('All')
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const cities = useMemo(
    () => ['All', ...Array.from(new Set(cellTowers.map(tower => tower.city)))],
    []
  )
  const statuses = useMemo(() => ['All', 'active', 'offline'], [])
  const networkTypes = useMemo(
    () => ['All', ...Array.from(new Set(cellTowers.map(tower => tower.networkType)))],
    []
  )

  const filtered = useMemo(
    () =>
      cellTowers.filter(
        tower =>
          (city === 'All' || tower.city === city) &&
          (status === 'All' || tower.status === status) &&
          (networkType === 'All' || tower.networkType === networkType) &&
          tower.name.toLowerCase().includes(search.toLowerCase())
      ),
    [search, city, status, networkType]
  )

  return (
    <div className={`dashboard-grid ${collapsed ? 'collapsed' : ''}`}>
      <header className="dashboard-header">
        <button className="menu-btn" onClick={() => setMobileOpen(true)}>☰</button>
        <h1 className="dashboard-title">Cell Tower Dashboard</h1>
      </header>

      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed(prev => !prev)}
        mobileOpen={mobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />

      <main className="dashboard-main">
        <SummaryCards data={filtered} />
        <div className="mobile-filters">
          <Filters
            search={search}
            city={city}
            status={status}
            networkType={networkType}
            cities={cities}
            statuses={statuses}
            networkTypes={networkTypes}
            onSearchChange={setSearch}
            onCityChange={setCity}
            onStatusChange={setStatus}
            onNetworkTypeChange={setNetworkType}
            onReset={() => {
              setSearch('')
              setCity('All')
              setStatus('All')
              setNetworkType('All')
            }}
          />
        </div>
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
          status={status}
          networkType={networkType}
          cities={cities}
          statuses={statuses}
          networkTypes={networkTypes}
          onSearchChange={setSearch}
          onCityChange={setCity}
          onStatusChange={setStatus}
          onNetworkTypeChange={setNetworkType}
          onReset={() => {
            setSearch('')
            setCity('All')
            setStatus('All')
            setNetworkType('All')
          }}
        />
      </aside>
    </div>
  )
}

export default App
