import React from 'react';
import { Link } from "react-router-dom";

function A(props) {
    const { action, controller } = props;

    return (
        <Link to={'sistemas/jewc/'+controller+'/'+action} {...props}>
            {props.children}
        </Link>
    );
}

export default A;
