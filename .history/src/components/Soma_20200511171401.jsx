
import React from 'react'
import Card from './Card'

export default props => {

    // const min = props.min
    // const max = props.max

    //essa forma faz o mesmo que a forma decima
    const{min, max } = props


    return (
        <Card title="Soma dos Números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{max+ min}</strong>
                </span>
            </div>
        </Card>
    )

}