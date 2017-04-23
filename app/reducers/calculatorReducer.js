import * as Actions from '../Actions';
import Operations from './Operations';

const  defaultState = {
    'display': '',
    'lastValue': 0,
    'append': false,
    'chainOperation': false,
    'operation': Operations.Identity};

const calculatorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.NUMBER:
            return number(state, action.value);
        case Actions.CLEAR:
            return defaultState;
        case Actions.ZERO:
            return zero(state);
        default:
            return state;
    }
};

function number(state, value) {
    if(state.append) {
        return Object.assign({}, state, {
            'display': state.display + value
        });
    }

    return Object.assign({}, state, {
        'display': value.toString(),
        'append': true
    });
}

function zero(state) {
    if(state.display.trim() === '' || !state.append) {
        return Object.assign({}, state, {
            'display': '0',
            'append': false
        });
    }

    return number(state, 0);
}

export default calculatorReducer;
