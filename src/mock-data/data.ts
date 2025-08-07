import type { CellTower } from '../schema/types'

export const cellTowers: CellTower[] = [
  { id: '1', name: 'Cairo Tower 1', city: 'Cairo', networkType: '4G', status: 'active', signalStrength: 4 },
  { id: '2', name: 'Cairo Tower 2', city: 'Cairo', networkType: '5G', status: 'offline', signalStrength: 3 },
  { id: '3', name: 'Cairo Tower 3', city: 'Cairo', networkType: '4G', status: 'active', signalStrength: 5 },
  { id: '4', name: 'Alexandria Tower 1', city: 'Alexandria', networkType: '5G', status: 'active', signalStrength: 4 },
  { id: '5', name: 'Alexandria Tower 2', city: 'Alexandria', networkType: '4G', status: 'offline', signalStrength: 2 },
  { id: '6', name: 'Alexandria Tower 3', city: 'Alexandria', networkType: '5G', status: 'active', signalStrength: 5 },
  { id: '7', name: 'Hurghada Tower 1', city: 'Hurghada', networkType: '4G', status: 'offline', signalStrength: 1 },
  { id: '8', name: 'Hurghada Tower 2', city: 'Hurghada', networkType: '5G', status: 'active', signalStrength: 3 },
  { id: '9', name: 'Hurghada Tower 3', city: 'Hurghada', networkType: '4G', status: 'active', signalStrength: 4 },
  { id: '10', name: 'Luxor Tower 1', city: 'Luxor', networkType: '5G', status: 'offline', signalStrength: 2 },
  { id: '11', name: 'Luxor Tower 2', city: 'Luxor', networkType: '4G', status: 'active', signalStrength: 5 },
  { id: '12', name: 'Luxor Tower 3', city: 'Luxor', networkType: '5G', status: 'active', signalStrength: 4 },
]