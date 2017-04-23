import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { footer } from '../styles/app.scss';
import { app } from '../styles/app.scss';

const App = ({ children }) =>
    <div className={app}>
        <h1>React Calculator</h1>
        { children }
        <footer className={footer}>
            <Link to="/">Calculator</Link>
            <Link to="/about">About</Link>
        </footer>
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
