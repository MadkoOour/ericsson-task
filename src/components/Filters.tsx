interface FiltersProps {
  search: string;
  city: string;
  status: string;
  networkType: string;
  cities: string[];
  statuses: string[];
  networkTypes: string[];
  onSearchChange: (value: string) => void;
  onCityChange: (value: string) => void;
  onStatusChange: (value: string) => void;
  onNetworkTypeChange: (value: string) => void;
  onReset: () => void;
}

const Filters = ({
  search,
  city,
  status,
  networkType,
  cities,
  statuses,
  networkTypes,
  onSearchChange,
  onCityChange,
  onStatusChange,
  onNetworkTypeChange,
  onReset,
}: FiltersProps) => (
  <section className="filters">
    <div className="filter-group">
      <label htmlFor="search-input">Tower Name</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        className="search-input"
      />
    </div>
    <div className="filter-group">
      <label htmlFor="city-select">City</label>
      <select
        id="city-select"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        className="city-select"
      >
        {cities.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </div>
    <div className="filter-group">
      <label htmlFor="status-select">Status</label>
      <select
        id="status-select"
        value={status}
        onChange={(e) => onStatusChange(e.target.value)}
        className="status-select"
      >
        {statuses.map((s) => (
          <option key={s} value={s}>
            {s}
          </option>
        ))}
      </select>
    </div>
    <div className="filter-group">
      <label htmlFor="network-select">Network Type</label>
      <select
        id="network-select"
        value={networkType}
        onChange={(e) => onNetworkTypeChange(e.target.value)}
        className="network-select"
      >
        {networkTypes.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
    </div>
    <div className="filter-group">
      <button type="button" className="reset-btn" onClick={onReset}>
        Reset Filters
      </button>
    </div>
  </section>
);

export default Filters;
