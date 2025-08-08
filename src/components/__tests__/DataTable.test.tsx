/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react'
import DataTable from '../DataTable'
import type { CellTower } from '../../schema/types'

describe('DataTable', () => {
  it('renders no data message when data is empty', () => {
    render(<DataTable data={[]} />)
    expect(screen.getByText('No matching data found.')).toBeInTheDocument()
  })

  it('renders table with data rows', () => {
    const data: CellTower[] = [
      { id: '1', name: 'Tower1', city: 'City1', networkType: '4G', status: 'active', signalStrength: 5 },
      { id: '2', name: 'Tower2', city: 'City2', networkType: '5G', status: 'offline', signalStrength: 3 },
    ]
    render(<DataTable data={data} />)
    // test headerssssssss
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('City')).toBeInTheDocument()
    expect(screen.getByText('Network Type')).toBeInTheDocument()
    expect(screen.getByText('Status')).toBeInTheDocument()
    expect(screen.getByText('Signal Strength')).toBeInTheDocument()
    // test rowssssssss
    expect(screen.getByText('Tower1')).toBeInTheDocument()
    expect(screen.getByText('City2')).toBeInTheDocument()
  })
})