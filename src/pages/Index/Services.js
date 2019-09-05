import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import pattern from '../../images/paterns/hexagonal.png';

import colorPurple from "@material-ui/core/colors/purple";
import Grid from "@material-ui/core/Grid";


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: 'url('+pattern+')',
        backgroundRepeat: 'repeat',
        padding: theme.spacing(3),
        backgroundAttachment: 'fixed',
        margin: 0,
        width: '100%',
        maxWidth: '100%',
    },
    container: {
    },
    pageTitle: {
    },
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    },
});

class Servicos extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Container className={classes.container}>
                    <Typography variant="h1" component="h1" className={classes.pageTitle}>
                        Serviços
                    </Typography>
                    <Grid container spacing={12}>
                        <Grid item key={1} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    Desenvolvimento Web
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Desenvolvo sites e sistemas Web com tecnologia de ponta
                                    e layout moderno focando na experiência do usuário. <br/>
                                    Tenho formação avançada em desenvolvimento javascript, php, html, css, python, c, e outros..<br/>
                                    Atualmente tenho trabalhado com as tecnologias:<br/>
                                    React.js, Node.js, GraphQL, Python, Material Design, etc; para o desenvolvimento Web e Mobile.<br/>
                                    Também me dedico à pesquisa e desenvolvimento de sistemas baseados em Machine Learning
                                    (Inteligência Artificial) utilizando tanto frameworks como Tensorflow, Pytorch, SciKit e Keras,
                                    quanto suítes completas de seviços desse tipo como Google Cloud, IBM Watson, e Microsoft Azure;
                                    Como evidenciado pelo robô de conversação que coloquei de exemplo nesse site. <br/>
                                    Completo meu trabalho em desenvolvimento com uma boa base em Ontologias (owl/rdf/json-ld)
                                    utilizando o Python e bibliotecas diversas para aplicações que envolvem bases de dados.<br/>
                                    Faço seviços Freelancer independente e estou disponível para contratação através da minha
                                    seção de contato ou do meu robô de conversação.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item key={1} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    Produção Musical <br/>
                                    e de Eventos
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Também sou músico compositor e multi-intrumentista
                                    (Guitarra, violão, teclado, bateria, percussão e clarinete), e produtor músical. <br/>
                                    Além disso, me disponho a produzir eventos relacionados à música quando me convém.
                                    Por isso, se você tem algum evento legal em produção ou um espaço maneiro que está precisando
                                    de animação à noite e acha que meu som faz seu estilo, então fale comigo!
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        );
    }
}


Servicos.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Servicos);
