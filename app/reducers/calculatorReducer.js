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
        case Actions.DOT:
            return dot(state);
        case Actions.ADD:
            return operation(state, Operations.Add);
        case Actions.MINUS:
            return operation(state, Operations.Minus);
        case Actions.DIVIDE:
            return operation(state, Operations.Divide);
        case Actions.TIMES:
            return operation(state, Operations.Times);
        case Actions.EQUAL:
            return equal(state);
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

function dot(state) {
    if(state.display.trim() !== '' && state.append) {
        return Object.assign({}, state, {
            'display': appendDecimal(state.display)
        });
    }

    return Object.assign({}, state, {
        'display': '0.',
        'append': true
    });
}

function operation(state, fn) {
    if(state.display.trim() === '') {
        return state;
    }

    const value = parseFloat(state.display);
    if(state.chainOperation) {
        const result = state.operation(state.lastValue, value);

        return Object.assign({}, state, {
            'operation': fn,
            'display': result.toString(),
            'lastValue': result,
            'append': false
        });
    }

    return Object.assign({}, state, {
        'operation': fn,
        'lastValue': value,
        'append': false,
        'chainOperation': true
    });
}

function equal(state) {
    if(state.display.trim() === '') {
        return state;
    }

    const value = parseFloat(state.display);
    if(state.append) {
        const result = state.operation(state.lastValue, value);
        return Object.assign({}, state, {
            'display': result.toString(),
            'lastValue': value,
            'append': false,
            'chainOperation': false
        });
    }

    const result = state.operation(value, state.lastValue);
    return Object.assign({}, state, {
        'display': result.toString(),
        'append': false,
        'chainOperation': false
    });
}

function appendDecimal(display) {
    if(display.includes('.')) {
        return display;
    }

    return display + '.';
}

export default calculatorReducer;
