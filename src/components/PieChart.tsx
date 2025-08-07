import { useRef, useEffect } from 'react'
import type { FC } from 'react'
import * as d3 from 'd3'
import type { CellTower } from '../schema/types'

interface PieChartProps {
  data: CellTower[]
}

const PieChart: FC<PieChartProps> = ({ data }) => {
  const ref = useRef<SVGSVGElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const svg = d3.select(ref.current)
    svg.selectAll('*').remove()
    const width = 300
    const height = 300
    const radius = Math.min(width, height) / 2
    const g = svg
      .attr('viewBox', `0 0 ${width} ${height}`)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`)
    const statusMap = d3.rollup(
      data,
      (v: CellTower[]) => v.length,
      (d: CellTower) => d.status
    )
    const statuses = Array.from(statusMap).map(([status, count]) => ({ status, count }))
    const color = d3.scaleOrdinal<string>()
      .domain(statuses.map(d => d.status))
      .range(['#4daf4a', '#e41a1c'])
    const pie = d3.pie<{ status: string; count: number }>().value(d => d.count)
    const arc = d3.arc<d3.PieArcDatum<{ status: string; count: number }>>()
      .innerRadius(0)
      .outerRadius(radius)
    const arcs = g.selectAll('arc')
      .data(pie(statuses))
      .enter()
      .append('g')
    arcs.append('path')
      .attr('d', arc as any)
      .attr('fill', d => color(d.data.status))
    arcs.append('text')
      .attr('transform', d => `translate(${arc!.centroid(d)})`)
      .attr('text-anchor', 'middle')
      .attr('font-size', '12px')
      .text(d => `${d.data.status}: ${d.data.count}`)
  }, [data])

  return <svg ref={ref} width="100%" height="300" />
}

export default PieChart