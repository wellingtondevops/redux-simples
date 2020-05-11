
import React from 'react'
import Card from './Card'

export default props => {

    const min = props.min
    const max = props.max


    const aleatorio = max
    return (
        <Card title="Sorteio de um Número" Purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )

}