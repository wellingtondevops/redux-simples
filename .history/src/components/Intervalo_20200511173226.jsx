import './Intervalo.css'
import React from 'react'
import Card from './Card'

export default props => {

    const {min, max} =  props
    return (
        <Card title="Intervalo de números" Red>

            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} onChange={e=>props.onMinChanged(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} readOnly />
                </span>

            </div>

        </Card>
    )

}