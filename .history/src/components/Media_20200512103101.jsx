
import React from 'react'
import {connect } from 'react-redux'
import Card from './Card'

function Media(props) {
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

export default connect()(Media)