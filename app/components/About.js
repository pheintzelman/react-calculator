import React from 'react';
import styles from '../styles/styles.scss';
import {about} from '../styles/about.scss';

const About = () =>
    <div className= {about}>
        React Calculator was built in 2017 by Paul Heintzelman
        <div className= {styles['spacer-top-30']}>
            This project was done as a learning experance. <br></br>
            <span className= {styles.aside}>Flash and sparkle are sold separately</span>
        </div>
    </div>;


export default About;
