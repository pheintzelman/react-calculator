import * as Actions from '../Actions';
import calculator from './calculator';
const Operations = calculator.Operations;

const calculatorReducer = (state = calculator.defaultState, action) => {
    switch (action.type) {
        case Actions.NUMBER:
            return calculator.number(state, action.value);
        case Actions.CLEAR:
            return calculator.defaultState;
        case Actions.ZERO:
            return calculator.zero(state);
        case Actions.DOT:
            return calculator.dot(state);
        case Actions.ADD:
            return calculator.operation(state, Operations.Add);
        case Actions.MINUS:
            return calculator.operation(state, Operations.Minus);
        case Actions.DIVIDE:
            return calculator.operation(state, Operations.Divide);
        case Actions.TIMES:
            return calculator.operation(state, Operations.Times);
        case Actions.EQUAL:
            return calculator.equal(state);
        default:
            return state;
    }
};

export default calculatorReducer;
