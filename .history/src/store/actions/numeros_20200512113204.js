export function alterNumeroMinimo(novoNumero) {
    return {
        type: 'NUM_MIN_ALTERADO',
        payload: novoNumero
    }
}


export function alterNumeroMaximo(novoNumero) {
    return {
        type: 'NUM_MAX_ALTERADO',
        payload: novoNumero
    }
}