import { makeStyles } from "@material-ui/core";

import php_logo from '../../images/logos/php.png';
import html_logo from '../../images/logos/html.png';
import css_logo from '../../images/logos/css.png';
import javascript_logo from '../../images/logos/javascript.png';
import python_logo from '../../images/logos/python.png';
import react_logo from '../../images/logos/react.svg';
import node_logo from '../../images/logos/node-js.png';
import graphQl_logo from '../../images/logos/graph-ql.png';
import scikit_logo from '../../images/logos/scikit-learn.png';
import keras_logo from '../../images/logos/keras.png';
import tensorflow_logo from '../../images/logos/tensorflow.svg';
import pytorch_logo from '../../images/logos/pytorch.svg';
import googleCloud_logo from '../../images/logos/google-cloud.svg';
import watson_logo from '../../images/logos/watson.png';
import azure_logo from '../../images/logos/azure.svg';
import material_logo from '../../images/logos/material.png';
import jsonLd_logo from '../../images/logos/json-ld.png';

import vocal_logo from '../../images/icons/mic.png';
import el_guitar_logo from '../../images/icons/guitar.png';
import guitar_logo from '../../images/icons/ac-guitar.png';
import keys_logo from '../../images/icons/keyboard.png';
import drums_logo from '../../images/icons/drums.png';
import percussion_logo from '../../images/icons/percussion.png';
import clarinet_logo from '../../images/icons/clarinet.png';
import production_logo from '../../images/icons/cds.png';


const useStyles = makeStyles((theme) => ({
    logo: {
        marginTop: 0,
        marginBottom: 0,
        marginLeft: theme.spacing(1),
        marginRight: 2,

        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 0,
        fontSize: '1.1rem',
        color: 'transparent',
    },
    logoSpacer: {
        width: 16,
        height: 20,
        marginRight: 2,
        display: 'inline-block',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 2,
    },
    logoPhp: {
        backgroundImage: 'url('+php_logo+')',
        backgroundPositionY: 4,
        fontSize: 'larger',
    },
    logoJavascript: {
        fontFamily: 'Neutra',
        color: '#666',
        paddingTop: 3,
    },
    logoJavascriptSpacer: {
        backgroundImage: 'url('+javascript_logo+')',
    },
    logoHtml: {
        fontFamily: 'Neutra',
        color: '#666',
        paddingTop: 3,
    },
    logoHtmlSpacer: {
        backgroundImage: 'url('+html_logo+')',
    },
    logoCss: {
        fontFamily: 'Neutra',
        color: '#666',
        paddingTop: 3,
    },
    logoCssSpacer: {
        backgroundImage: 'url('+css_logo+')',
    },
    logoPython: {
        backgroundImage: 'url('+python_logo+')',
        backgroundPositionY: 3,
        // marginLeft: 0,
        fontSize: 25,
        lineHeight: 0.8,
        verticalAlign: 'bottom',
    },
    logoC: {
        color: '#444',
    },
    logoReact: {
        fontSize: '1rem',
        color: '#4a4a4a',
        marginLeft: 0,
        fontFamily: '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,' +
            'Fira Sans,Droid Sans,Helvetica Neue,sans-serif',
    },
    logoReactSpacer: {
        backgroundImage: 'url('+react_logo+')',
        width: 24,
        height: 24,
        backgroundPositionY: 1,
        marginRight: 1,
    },
    logoNode: {
        backgroundImage: 'url('+node_logo+')',
        fontSize: '1.2rem',
        paddingBottom: 3,
        backgroundPositionY: 3,
    },
    logoGraphQL: {
        backgroundImage: 'url('+graphQl_logo+')',
        // backgroundPositionY: 1,
        fontSize: '1.4rem',
        verticalAlign: 'bottom',
        lineHeight: 1,
    },
    logoMaterial: {
        color: '#333',
        fontSize: '1rem',
        whiteSpace: 'nowrap',
        marginLeft: 0,
    },
    logoMaterialSpacer: {
        backgroundImage: 'url('+material_logo+')',
        width: 23,
        height: 23,
        backgroundPositionY: 0,
        marginRight: 1,
    },
    logoTensorflow: {
        backgroundImage: 'url('+tensorflow_logo+')',
        fontSize: '1.2rem',
        backgroundPositionY: 3,
    },
    logoPytorch: {
        backgroundImage: 'url('+pytorch_logo+')',
        backgroundPositionY: 7,
        fontSize: '1.2rem',
    },
    logoSciKit: {
        backgroundImage: 'url('+scikit_logo+')',
        fontSize: '1.4rem',
        lineHeight: 0.7,
        backgroundPositionY: 5,
    },
    logoKeras: {
        backgroundImage: 'url('+keras_logo+')',
        fontSize: '1.4rem',
        backgroundPositionY: 8,
        lineHeight: 1,
    },
    logoGoogleCloud: {
        backgroundImage: 'url('+googleCloud_logo+')',
        fontSize: '1.2rem',
        backgroundPositionY: 5,
    },
    logoIBMWatson: {
        backgroundImage: 'url('+watson_logo+')',
        fontSize: '1.2rem',
        backgroundPositionY: -2,
    },
    logoMicrosoftAzure: {
        backgroundImage: 'url('+azure_logo+')',
        backgroundPositionY: 3,
    },
    logoJsonLd: {
        backgroundImage: 'url('+jsonLd_logo+')',
    },
    logoInstrument: {
        marginTop: 0,
        marginBottom: 0,
        marginRight: 2,
        backgroundSize: 'contain',

        backgroundRepeat: 'no-repeat',
        backgroundPositionY: 0,

        // paddingLeft: 23,
    },
    logoVocal: {
        backgroundImage: 'url('+vocal_logo+')',
    },
    logoElGuitar:{
        backgroundImage: 'url('+el_guitar_logo+')',
        // paddingLeft: 22,
    },
    logoGuitar:{
        backgroundImage: 'url('+guitar_logo+')',
        // paddingLeft: 20,
    },
    logoKeys:{
        backgroundImage: 'url('+keys_logo+')',
        // paddingLeft: 25,
    },
    logoDrums:{
        backgroundImage: 'url('+drums_logo+')',
    },
    logoPerc:{
        backgroundImage: 'url('+percussion_logo+')',
    },
    logoClarinet:{
        backgroundImage: 'url('+clarinet_logo+')',
    },
    logoProd:{
        backgroundImage: 'url('+production_logo+')',
    },
}));

const lgClss = useStyles();

export default lgClss;