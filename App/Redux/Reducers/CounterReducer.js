import * as Actions from '../ActionTypes'

const CounterReducer = (state = { count: 0 }, action) => {
    console.log('caaarat', state)
    switch (action.type) {

        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state, {
                count: state.count + 1
            });
        case Actions.COUNTER_DECREMENT:
            return Object.assign({}, state, {
                count: state.count - 1
            });
        case Actions.SET_COUNTER:
            return Object.assign({}, state, {
                count: action.payload
            });
        default:
            return state;
    }
}

export default CounterReducer;