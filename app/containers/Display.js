import React, { PropTypes } from 'react';
import { display,  displayText } from '../styles/display.scss';
import { connect } from 'react-redux';


const Display = ({text}) =>
    <div className={display}>
        <div className={displayText}>{text}</div>
    </div>;

Display.propTypes = {
    text: PropTypes.string
};

const mapStateToProps = (state) => {
    return { 'text': state.calculator.display };
};
const mapDispatchToProps = () => {return {};};

export default connect(mapStateToProps,
                       mapDispatchToProps)(Display);
