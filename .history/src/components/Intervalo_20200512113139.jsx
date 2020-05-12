import './Intervalo.css'
import React from 'react'
import { connect } from 'react-redux'
import Card from './Card'
import { alterNumeroMinimo } from '../store/actions/numeros'

function Intervalo(props) {

    const { min, max } = props


    return (
        <Card title="Intervalo de números" Red>

            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min}
                        onChange={e => props.alterarMinimo(+e.target.value)}
                    />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} readOnly />
                </span>
            </div>
        </Card>
    )

}

function mapStateToProps(state) {
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapDispatchToProps(dispatch) {
    return {
        alterarMinimo(novoNumero) {
            const action = alterNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Intervalo)