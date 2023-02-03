import React from 'react'

export default function Input({ label, value, onChange }) {
    return (
        <div className='form-group'>
            <label>{label}</label>
            <input type="text" className='form-control' value={value} onChange={e => onChange(e.currentTarget.value)} />
        </div>
    )
}
