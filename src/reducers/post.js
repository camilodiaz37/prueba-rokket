const GUARDARPOST = 'CONTADOR/GUARDARPOST'

export const guardarPost = (payload) => ({
    type: GUARDARPOST,
    payload,
})

const initialState = null;
export default function post(state = initialState, action) {
    switch (action.type) {
        case GUARDARPOST:
            return action.payload;
        default:
            return state;
    }
}