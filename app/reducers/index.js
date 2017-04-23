import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import calculator from './calculatorReducer';

const rootReducer = combineReducers({
    calculator,
    routing
});

export default rootReducer;
