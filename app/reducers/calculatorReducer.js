import * as Actions from '../Actions';

const  defaultState = {'display': ''};

const calculatorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case Actions.NUMBER:
            return number(state, action.value);
        case Actions.CLEAR:
            return clear(state);
        default:
            return state;
    }
};

function number(state, value) {
    return Object.assign({}, state, {
        'display': state.display + value
    });
}

function clear(state) {
    return Object.assign({}, state, {
        'display': ''
    });
}

export default calculatorReducer;
