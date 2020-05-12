import { createStore, combineReducers } from 'redux'
import  numerosReducer from './reducers/numeros'

const reducers = combineReducers({
    numeros: function (state, action) {
        console.log(state, ' ', action)

        switch (action.type) {
            case 'NUM_MIN_ALTERADO':
                return {
                    ...state,
                    min: action.payload
                }
            case 'NUM_MAX_ALTERADO':
                return {
                    ...state,
                    max: action.payload
                }
            default:

                return {
                    min: 7,
                    max: 31
                }
        }

    }, nomes: function (state, action) {
        console.log(state, ' ', action)
        return [
            'Ana',
            'Bia',
            'Carlos'
        ]

    }
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig