import React, { Component } from 'react';
// import annyang from "../annyang.min";

class SpeechRecog extends Component {
    state = {
        heard: null
    };

    render() {
        return (
            <div>{this.props.paused ? 'Pausado!' : 'Escutando....'}</div>
        );
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

    onCapture = (phrases) => {
        console.log("I think the user said: ", phrases[0]);
        console.log("But then again, it could be any of the following: ", phrases);
        this.setState({heard: phrases[0]})
        this.props.onRecog(phrases[0]);
    };

    componentDidMount() {
        this.annyang = window.annyang;

        if (this.annyang) {
            this.annyang.setLanguage('pt-BR');
            this.annyang.addCallback('result', this.onCapture);
        }
    }
}

export default SpeechRecog;