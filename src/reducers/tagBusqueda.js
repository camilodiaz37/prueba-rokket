const GUARDAR = 'CONTADOR/GUARDAR'

export const guardar = (payload) => ({
    type: GUARDAR,
    payload,
})

const initialState = '';

export default function tagBusqueda(state = initialState, action) {
    switch (action.type) {
        case GUARDAR:
            return action.payload;
        default:
            return state;
    }
}