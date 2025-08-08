import { render, screen } from '@testing-library/react'
import Card from '../Card'

describe('Card', () => {
  it('renders title and value', () => {
    render(<Card title="Test Title" value="123" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
    expect(screen.getByText('123')).toBeInTheDocument()
  })
})