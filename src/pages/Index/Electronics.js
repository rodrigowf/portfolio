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

class Research extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Container className={classes.container}>
                    <Typography variant="h1" component="h1" className={classes.pageTitle}>
                        Histórico de Pesquisa
                    </Typography>
                    <Grid container spacing={12}>
                        <Grid item key={1} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    Pesquisas Atuais no âmbito pessoal
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    - Pesquisa e desenvolvimento de aplicações de Inteligência Artificial (IA). <br/>
                                    - Pesquisa e desenvolvimento de aplicações baseadas nas tecnologias
                                    mais atuais para web e mobile. <br/>
                                    - Pesquisa realizada como aluno de graduação em Ciência da Computação em fase
                                    final, de "especialização" em Inteligência Artificial e
                                    Eletrônica Embarcada para Internet das Coisas.
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item key={2} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    P&D para EAD do IMA
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Pesquisa e desenvolvimento de tecnologia de infraestrutura computacional para
                                    o laboratório de ensino à distância do professor Felipe Acker,
                                    diretor atual do novo Instituto de Matemática Aplicada da UFRJ
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item key={3} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    P&D na EJCM (2011 - 2013)
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Desenvolvimento de uma framework PHP que foi utilizada no projeto
                                    JEWC e serviu de inspiração para a framework da empresa. <br/>
                                    Além de trabalho com pesquisas diversas em tecnologias web para o setor de
                                    Projetos da empresa; E pesquisa e aplicação de metodologias de marketing no setor
                                    de Marketing da empresa
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item key={4} xs={6}>
                            <Paper className={classes.paper} elevation={2}>
                                <Typography variant="h3" component="h2" className={classes.text} gutterBottom>
                                    P&D e suporte no LTC/NUTES - UFRJ (2010)
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Participação no estudo e desenvolvimento do sistema de Ensíno à distância:
                                    Construtore, do LTC/NUTES - UFRJ
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        );
    }
}


Research.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Research);
