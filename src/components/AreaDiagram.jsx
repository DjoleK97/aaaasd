import React from 'react'
import { Area, AreaChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function AreaDiagram({ data, groupingKey, valueKey }) {
    return (
        <ResponsiveContainer width='100%' aspect={4 / 3}>
            <AreaChart
                data={data}
            >
                <XAxis dataKey={groupingKey} />
                <YAxis />
                <Tooltip />
                <Area dataKey={valueKey} fill="#8884d8" />
            </AreaChart>
        </ResponsiveContainer>
    )
}
