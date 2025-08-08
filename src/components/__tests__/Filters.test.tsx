/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Filters from '../Filters'

describe('Filters', () => {
  const cityOptions = ['All', 'City1', 'City2']
  const statusOptions = ['All', 'active', 'offline']
  const networkOptions = ['All', '4G', '5G']

  const setup = () => {
    const onSearchChange = vi.fn()
    const onCityChange = vi.fn()
    const onStatusChange = vi.fn()
    const onNetworkTypeChange = vi.fn()
    const onReset = vi.fn()

    render(
      <Filters
        search="test"
        city="City1"
        status="active"
        networkType="4G"
        cities={cityOptions}
        statuses={statusOptions}
        networkTypes={networkOptions}
        onSearchChange={onSearchChange}
        onCityChange={onCityChange}
        onStatusChange={onStatusChange}
        onNetworkTypeChange={onNetworkTypeChange}
        onReset={onReset}
      />
    )

    return { onSearchChange, onCityChange, onStatusChange, onNetworkTypeChange, onReset }
  }

  it('renders input and selects with correct values', () => {
    setup()
    expect(screen.getByLabelText('Tower Name')).toHaveValue('test')
    expect(screen.getByLabelText('City')).toHaveValue('City1')
    expect(screen.getByLabelText('Status')).toHaveValue('active')
    expect(screen.getByLabelText('Network Type')).toHaveValue('4G')
  })

  it('calls handlers on user interaction', async () => {
    const { onSearchChange, onCityChange, onStatusChange, onNetworkTypeChange, onReset } = setup()
    const user = userEvent.setup()

    await user.clear(screen.getByLabelText('Tower Name'))
    await user.type(screen.getByLabelText('Tower Name'), 'new')
    expect(onSearchChange).toHaveBeenCalled()

    await user.selectOptions(screen.getByLabelText('City'), 'City2')
    expect(onCityChange).toHaveBeenCalledWith('City2')

    await user.selectOptions(screen.getByLabelText('Status'), 'offline')
    expect(onStatusChange).toHaveBeenCalledWith('offline')

    await user.selectOptions(screen.getByLabelText('Network Type'), '5G')
    expect(onNetworkTypeChange).toHaveBeenCalledWith('5G')

    await user.click(screen.getByRole('button', { name: /Reset Filters/i }))
    expect(onReset).toHaveBeenCalled()
  })
})