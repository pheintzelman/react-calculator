import React from 'react';
import CalculatorButton from '../containers/CalculatorButton';
import Display from '../containers/Display';
import {calculator} from '../styles/calculator.scss';
import * as Actions from '../Actions';

const Calculator = () => {
    return (
        <div className={calculator}>
            <Display />
            <CalculatorButton data={{ 'label': 'Clear', 'action': { 'type': Actions.CLEAR }, 'type': 'wide' }} />
            <CalculatorButton data={{ 'label': '7', 'action': { 'type': Actions.NUMBER, 'value': 7 } }} />
            <CalculatorButton data={{ 'label': '8', 'action': { 'type': Actions.NUMBER, 'value': 8 } }} />
        </div>
    );
};

export default Calculator;
