import React from 'react'
import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

export default function BarDiagram({ data, groupingKey, valueKey }) {
    return (
        <ResponsiveContainer width='100%' aspect={4 / 3}>
            <BarChart
                data={data}
            >
                <XAxis dataKey={groupingKey} />
                <YAxis />
                <Tooltip />
                <Bar dataKey={valueKey} fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    )
}
