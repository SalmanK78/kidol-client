import React from 'react';
import Header from '../shared/Header';
import useTitle from '../../hooks/useTitle';

const About = () => {
    useTitle('About')
    return (
        <div>
            <Header>About</Header>
        </div>
    );
};

export default About;