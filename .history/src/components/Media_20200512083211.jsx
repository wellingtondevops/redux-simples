
import React from 'react'
import Card from './Card'

export default props => {


    // const min = props.min
    // const max = props.max

    //essa forma faz o mesmo que a forma decima
    

    return (
        <Card title="Média dos Números" Green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )
}