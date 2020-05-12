
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'

function Soma(props) {

    const { min, max } = props


    return (
        <Card title="Soma dos Números" Blue>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{10}</strong>
                </span>
            </div>
        </Card>
    )

}

function mmapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

export default connect(mmapStateToProps)(Soma)