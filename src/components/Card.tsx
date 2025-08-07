import type { ReactNode } from 'react'
import '../styles/Card.scss'

interface CardProps {
  title: string
  value: ReactNode
}

const Card = ({ title, value }:CardProps) => (
  <div className="card">
    <div className="card-title">{title}</div>
    <div className="card-value">{value}</div>
  </div>
)

export default Card