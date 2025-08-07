import type { FC } from 'react'

interface FiltersProps {
  search: string
  city: string
  cities: string[]
  onSearchChange: (value: string) => void
  onCityChange: (value: string) => void
}

const Filters: FC<FiltersProps> = ({
  search,
  city,
  cities,
  onSearchChange,
  onCityChange
}) => (
  <section className="filters">
    <div className="filter-group">
      <label htmlFor="search-input">Tower Name</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={e => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
    <div className="filter-group">
      <label htmlFor="city-select">City</label>
      <select
        id="city-select"
        value={city}
        onChange={e => onCityChange(e.target.value)}
        className="city-select"
      >
        {cities.map(c => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
  </section>
)

export default Filters