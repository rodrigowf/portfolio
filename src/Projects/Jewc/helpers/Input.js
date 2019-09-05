import React from 'react';

function Input(props) {
    const { action, controller } = props;

    return (
        <input {...props} />
    );
}

export default Input;
