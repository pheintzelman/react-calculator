
const calculator = {};

calculator.Operations = { Identity: (x, y) => y, /* returning y here is important for chaining operations */
                     Add: (x, y) =>  x + y,
                     Minus: (x, y) =>  x - y,
                     Times: (x, y) =>  x * y,
                     Divide: (x, y) =>  x / y};

calculator.defaultState = {
    'display': '',
    'lastValue': 0,
    'append': false,
    'chainOperation': false,
    'operation': calculator.Operations.Identity};

calculator.number = function number(state, value) {
    if(state.append) {
        return Object.assign({}, state, {
            'display': state.display + value
        });
    }

    return Object.assign({}, state, {
        'display': value.toString(),
        'append': true
    });
};

calculator.zero = function zero(state) {
    if(state.display.trim() === '' || !state.append) {
        return Object.assign({}, state, {
            'display': '0',
            'append': false
        });
    }

    return calculator.number(state, 0);
};

calculator.dot = function dot(state) {
    if(state.display.trim() !== '' && state.append) {
        return Object.assign({}, state, {
            'display': appendDecimal(state.display)
        });
    }

    return Object.assign({}, state, {
        'display': '0.',
        'append': true
    });
};

calculator.operation = function operation(state, fn) {
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
};

calculator.equal = function equal(state) {
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
};

function appendDecimal(display) {
    if(display.includes('.')) {
        return display;
    }

    return display + '.';
}

export default calculator;
