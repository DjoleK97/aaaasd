

import React from 'react'
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function LineDiagram({ data, groupingKey, valueKey }) {
  return (
    <ResponsiveContainer width='100%' aspect={4 / 3}>
      <LineChart
        data={data}
      >
        <XAxis dataKey={groupingKey} />
        <YAxis />
        <Tooltip />
        <Line dataKey={valueKey} stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  )
}
