import { useRef, useEffect } from 'react'
import type { FC } from 'react'
import * as d3 from 'd3'
import type { CellTower } from '../types'

interface BarChartProps {
  data: CellTower[]
}

const BarChart: FC<BarChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()
    const width = 400
    const height = 300
    const margin = { top: 20, right: 20, bottom: 40, left: 40 }
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom
    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
    const mapData = d3.rollup(
      data,
      (v: CellTower[]) => v.length,
      (d: CellTower) => d.city
    )
    const counts = Array.from(mapData).map(([city, count]) => ({ city, count }))
    const x = d3
      .scaleBand<string>()
      .domain(counts.map(d => d.city))
      .range([0, innerWidth])
      .padding(0.1)
    const y = d3
      .scaleLinear()
      .domain([0, d3.max(counts, d => d.count) || 0])
      .nice()
      .range([innerHeight, 0])
    g.append('g')
      .attr('transform', `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
    g.append('g').call(d3.axisLeft(y).ticks(5))
    g.selectAll('.bar')
      .data(counts)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.city) || 0)
      .attr('y', d => y(d.count))
      .attr('width', x.bandwidth())
      .attr('height', d => innerHeight - y(d.count))
      .attr('fill', '#69b3a2')
  }, [data])

  return <svg ref={ref} width="100%" height="300" />
}

export default BarChart