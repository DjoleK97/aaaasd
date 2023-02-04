import React, { useState } from 'react'
import AreaDiagram from '../components/AreaDiagram';
import BarDiagram from '../components/BarDiagram';
import LineDiagram from '../components/LineDiagram';
import Select from '../components/Select';
import { chartTypes, numberFields } from '../types'


export default function StatisticsPage({
    dataStructure,
    data,
}) {
    const [selectedGroupingFieldName, setSelectedGroupingFieldName] = useState('');
    const [selectedMainField, setSelectedMainField] = useState('');
    const [selectedChartType, setSelectedChartType] = useState('')
    const numberOptions = dataStructure.filter(element => {
        return numberFields.includes(element.value);
    })
    if (numberOptions.length === 0) {
        return (
            <div className='container'>
                <h2 className='text-center mt-3'>
                    Your structure neeeds to have at least one number type field
                </h2>
            </div>

        )
    }
    return (
        <div className='container'>
            <div>
                <Select label='Grouping field'
                    value={selectedGroupingFieldName}
                    onChange={setSelectedGroupingFieldName}
                    options={dataStructure.map(element => {
                        return {
                            name: element.name,
                            label: element.name,
                        }
                    })}
                />
                <Select label='Main field'
                    value={selectedMainField}
                    onChange={setSelectedMainField}
                    options={numberOptions.map(element => {
                        return {
                            name: element.name,
                            label: element.name,
                        }
                    })}
                />
                <Select label='Chart type'
                    value={selectedChartType}
                    onChange={setSelectedChartType}
                    options={chartTypes}
                />
            </div>
            {
                selectedChartType && selectedMainField && selectedGroupingFieldName && (
                    <>
                        {
                            selectedChartType === 'line' && (
                                <LineDiagram data={data} groupingKey={selectedGroupingFieldName} valueKey={selectedMainField} />
                            )
                        }
                        {
                            selectedChartType === 'area' && (
                                <AreaDiagram data={data} groupingKey={selectedGroupingFieldName} valueKey={selectedMainField} />
                            )
                        }
                        {
                            selectedChartType === 'bar' && (
                                <BarDiagram data={data} groupingKey={selectedGroupingFieldName} valueKey={selectedMainField} />
                            )
                        }
                    </>
                )
            }
        </div>
    )
}
