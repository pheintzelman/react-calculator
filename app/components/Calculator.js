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
            <CalculatorButton data={{ 'label': '9', 'action': { 'type': Actions.NUMBER, 'value': 9 } }} />
            <CalculatorButton data={{ 'label': '÷', 'action': { 'type': Actions.DIVIDE} }} />
            <CalculatorButton data={{ 'label': '4', 'action': { 'type': Actions.NUMBER, 'value': 4 } }} />
            <CalculatorButton data={{ 'label': '5', 'action': { 'type': Actions.NUMBER, 'value': 5 } }} />
            <CalculatorButton data={{ 'label': '6', 'action': { 'type': Actions.NUMBER, 'value': 6 } }} />
            <CalculatorButton data={{ 'label': 'x', 'action': { 'type': Actions.TIMES} }} />
            <CalculatorButton data={{ 'label': '1', 'action': { 'type': Actions.NUMBER, 'value': 1 } }} />
            <CalculatorButton data={{ 'label': '2', 'action': { 'type': Actions.NUMBER, 'value': 2 } }} />
            <CalculatorButton data={{ 'label': '3', 'action': { 'type': Actions.NUMBER, 'value': 3 } }} />
            <CalculatorButton data={{ 'label': '-', 'action': { 'type': Actions.MINUS} }} />
            <CalculatorButton data={{ 'label': '0', 'action': { 'type': Actions.ZERO} }} />
            <CalculatorButton data={{ 'label': '.', 'action': { 'type': Actions.DOT} }} />
            <CalculatorButton data={{ 'label': '=', 'action': { 'type': Actions.EQUAL} }} />
            <CalculatorButton data={{ 'label': '+', 'action': { 'type': Actions.ADD} }} />
        </div>
    );
};

export default Calculator;
