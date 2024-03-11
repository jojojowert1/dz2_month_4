import React from 'react';


const About = (props) => {

    return (
        <div>
            <h1>{props.data.title}</h1>
            <p>{props.data.body}</p>
            <a href="">{props.data.link}</a>
        </div>
    );
};

export default About