import React, { Component } from 'react';
import robot_avatar from "./animations/hello.gif";
import Avatar from "@material-ui/core/Avatar";

import responses

class BotAvatar extends Component {
    state = {
        : null
    };

    componentDidMount() {
        this.annyang = window.annyang;

        if (this.annyang) {
            this.annyang.setLanguage('pt-BR');
            this.annyang.addCallback('result', this.onCapture);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.paused !== this.props.paused) {
            if(this.props.paused) {
                this.annyang.pause();
            }
            else {
                // Start listening.
                this.annyang.start();
            }
        }
    }

    render() {
        return (
            <Avatar
                alt="Avatar animado do robô Rodrigo Werneck"
                src={robot_avatar}
                className={classes.robotAvatar}/>
        );
    }
}

export default BotAvatar;