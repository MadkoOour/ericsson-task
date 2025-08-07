import { useState, useMemo } from 'react'
import './App.scss'
import { cellTowers } from './mock-data/data'
import SummaryCards from './components/SummaryCards'
import Filters from './components/Filters'
import DataTable from './components/DataTable'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

function App() {
  const [search, setSearch] = useState('')
  const [city, setCity] = useState('All')
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
    <div className="container">
      <header className="app-header">
        <h1 className="title">Cell Tower Dashboard</h1>
        <SummaryCards data={filtered} />
      </header>
      <Filters
        search={search}
        city={city}
        cities={cities}
        onSearchChange={setSearch}
        onCityChange={setCity}
      />
      <section className="data-section">
        <div className="table-container">
          <DataTable data={filtered} />
        </div>
        <div className="charts">
          <div className="chart">
            <BarChart data={filtered} />
          </div>
          <div className="chart">
            <PieChart data={filtered} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
