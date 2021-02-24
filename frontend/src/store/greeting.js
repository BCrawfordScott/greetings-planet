const GET_GREETING = 'greeting/GET_GREETING';
const GET_GREETINGS = 'greeting/GET_GREETINGS';

const getGreeting = (greeting) => ({
    type: GET_GREETING,
    payload: greeting
});

const getGreetings = (greetings) => ({
    type: GET_GREETINGS,
    payload: greetings,
});

export const fetchGreetings = () => async (dispatch) => {
    const response = await fetch('/api/greetings');
    const data = await response.json();
    dispatch(getGreetings(data.greetings));
    return response;
};
export const fetchGreeting = (id) => async (dispatch) => {
    const response = await fetch(`/api/greetings/${id}`);
    const data = await response.json();
    dispatch(getGreeting(data.greeting));
    return response;
};
const initialState = {};

function reducer(state = initialState, action) {
    let newState;
    switch (action.type) {
        case GET_GREETINGS:
            newState = Object.assign({}, action.payload);
            return newState;
        case GET_GREETING:
            newState = Object.assign({}, state, { [action.payload.id]: action.payload });
            return newState;
        default:
            return state;
    }
}

export default reducer;
