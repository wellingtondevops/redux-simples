import './Intervalo.css'
import React from 'react'
import { connect} from 'react-redux'
import Card from './Card'
import { alterNumeroMinimo} from '../store/actions/numeros'

function Intervalo(props) {

    const {min,max} = props
    props.alterarMinimo(10000)
    
    return (
        <Card title="Intervalo de números" Red>

            <div className="Intervalo">
                <span>
                    <strong>Mínimo</strong>
                    <input type="number" value={min} readOnly />
                </span>
                <span>
                    <strong>Máximo</strong>
                    <input type="number" value={max} readOnly/>
                </span>
            </div>
        </Card>
    )

}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max
    }
}

function mapActionCreatorsToProp(dispatch){
    return {
        alterarMinimo(novoNumero){
            const action = alterNumeroMinimo(novoNumero)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapStateToProps)(Intervalo)