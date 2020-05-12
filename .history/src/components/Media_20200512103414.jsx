
import React from 'react'
import {connect } from 'react-redux'
import Card from './Card'

function Media(props) {

    console.log(props.blabla)
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

function mapStateToProps(state){
    return {
        blabla: state.numeros
    }
}

export default connect(mapStateToProps)(Media)