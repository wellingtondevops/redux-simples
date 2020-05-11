
import React from 'react'
import Card from './Card'

export default props => {

    const { min, max } = props
    const aleatorio = max -min
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