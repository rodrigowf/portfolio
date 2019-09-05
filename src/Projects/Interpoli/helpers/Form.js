import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


function Form(props) {

    return (
        <form {...props}>
            {props.children}
        </form>
    );
}

Form.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Form;
