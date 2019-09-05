import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function A(props) {
    const { action, controller } = props;

    return (
        <Link to={'sistemas/jewc/'+controller+'/'+action} {...props}>
            {props.children}
        </Link>
    );
}

A.propTypes = {
    children: PropTypes.object.isRequired,
};

export default A;
