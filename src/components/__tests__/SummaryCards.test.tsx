/// <reference types="vitest" />
/// <reference types="@testing-library/jest-dom" />

import { render, screen } from '@testing-library/react'
import SummaryCards from '../SummaryCards'
import type { CellTower } from '../../schema/types'

describe('SummaryCards', () => {
  const data: CellTower[] = [
    { id: '1', name: 'A', city: 'X', networkType: '4G', status: 'active', signalStrength: 4 },
    { id: '2', name: 'B', city: 'X', networkType: '5G', status: 'offline', signalStrength: 2 },
    { id: '3', name: 'C', city: 'Y', networkType: '4G', status: 'active', signalStrength: 6 },
  ]

  it('renders total, active, and average signal', () => {
    render(<SummaryCards data={data} />)
    expect(screen.getByText('Total Towers')).toBeInTheDocument()
    expect(screen.getByText('3')).toBeInTheDocument()
    expect(screen.getByText('Active Towers')).toBeInTheDocument()
    expect(screen.getByText('2')).toBeInTheDocument()
    expect(screen.getByText('Average Signal')).toBeInTheDocument()
    expect(screen.getByText('4.00')).toBeInTheDocument()
  })
})