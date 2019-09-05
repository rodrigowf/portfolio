import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import colorPurple from "@material-ui/core/colors/purple";

import pattern from '../../images/paterns/flora1.jpg';


const styles = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundImage: 'url('+pattern+')',
        backgroundRepeat: 'repeat',
        padding: theme.spacing(3),
        margin: 0,
        width: '100%',
        maxWidth: '100%',
        boxShadow: 'inset 0px 1px 5px 5px rgba(0,0,0,0.9)',
    },
    container: {

    },
    pageTitle: {
        margin: theme.spacing(3),
        color: 'white',
    },
    paper: {
        margin: theme.spacing(3),
        padding: theme.spacing(3),
    },
});

class Music extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Container className={classes.container}>
                    <Typography variant="h1" component="h2" className={classes.pageTitle}>
                        Músicas - Composição e Produção
                    </Typography>
                    <Grid container spacing={12}>
                        <Grid item key={1} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Mooving On
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Música composta, interpretada e produzida inteiramente por mim, sozinho em casa de forma independente.
                                    Produção dessa versão concluída em 2013.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={2} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Timelapse
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Música composta e interpretada por mim sozinho - versão acústica
                                    - no estílo: Percussive Guitar.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={3} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Eleanor Rigby - Versão acústica
                                </Typography>
                                <Typography component="p" className={classes.text}>
                                    Adaptação criada e interpretada por mim da música "Eleanor Rigby" dos Beatles para
                                    o estilo: Percussive Guitar.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={4} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    A Chuva Chegou
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Música e clipe compostos, interpretados e produzidos por mim juntamente com os outros 2 membros do
                                    projeto Manakai, criado por mim e eles de forma independente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={5} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Disfarçando Toda a Farsa
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Música e clipe compostos, interpretados e produzidos por mim juntamente com os outros 2 membros do
                                    projeto Manakai, criado por mim e eles de forma independente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={6} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Eu Por Mim
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Letra escrita pelo meu promo Daniel; Harmonia, interpretação e produção feita
                                    numa parceiria entre eu e o baixista Matheus Lessa dentro do projeto de um album
                                    que estaremos lançando de forma totalmente independente em breve.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        );
    }
}


Music.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Music);
