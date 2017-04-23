import React, { PropTypes } from 'react';
import {calculatorButtonWide, calculatorButton} from '../styles/calculatorButton.scss';
import { connect } from 'react-redux';


const CalculatorButton = ({data, dispatch}) => {
    const className = data.type === 'wide' ? calculatorButtonWide : calculatorButton;

    return (<button
                onClick = {() => dispatch(data.action)}
                className = {className}>{data.label}</button>
           );
};

CalculatorButton.propTypes = {
    data: PropTypes.object,
    dispatch: PropTypes.func
};

const mapStateToProps = () => {return {};};
const mapDispatchToProps = (dispatch) => {
    return {
        'dispatch': action => dispatch(action)
    };
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(CalculatorButton);
