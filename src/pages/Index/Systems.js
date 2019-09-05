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

class Sistemas extends React.Component {
    state = {
    };

    render() {
        const { classes } = this.props;

        return (
            <Container className={classes.root}>
                <Container className={classes.container}>
                    <Typography variant="h1" component="h2" className={classes.pageTitle}>
                        Sites e Sistemas já desenvolvidos.
                    </Typography>
                    <Grid container spacing={12}>
                        <Grid item key={1} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Intellegi
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Sistema aberto para consultar tramitações de projetos de lei que ocorrem na
                                    Câmara dos deputados do Brasil.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Desenvolvido por mim em React.js utilizando Material Design Patterns
                                    e consultando a API do banco de dados abertos da Câmara.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="primary">
                                    Site ainda Ativo atualmente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={2} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Instituto de Matemática Aplicada - UFRJ
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Site com conteúdo institucional do Instituto e sub páginas para
                                    as disciplínas com conteúdo em texto, Latex e vídeos ou animações.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Desenvolvido por mim em Wordpress (plataforma oferecida pela infra do instituto),
                                    com trabalho de adaptação do html, javascript e css.
                                    Site ainda Ativo atualmente.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="primary">
                                    Site ainda Ativo atualmente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={3} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    JEWC - Junior Enterprise World Conference
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Nesse projeto eu participei da equipe que implementou todo o site e sistema para o evento
                                    (cadastro, alocação de reservas, orientações para o evento, etc..),
                                    sendo outra equipe que elaborou o design.
                                    Além disso, nesse evento também participei das equipes de gestão e planejamento das festas e staff.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    O sistema foi desenvolvido em PHP OO MVC, javascript e css,
                                    utilizando uma framework php que eu mesmo havia desenvolvido no ano anterior.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="error">
                                    Atualmente Inativo - Exemplo somente demonstração.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={4} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    SETI - Semana da Tecnologia e Inovação da UFRJ
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Nesse projeto eu criei a logotipo e participei da equipe que desenvolveu todo o site e sistema
                                    para o evento (cadastro, orientações, etc..), incluindo o layout.
                                    Além disso, nesse evento também participei como staff e marketing.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    O sistema foi desenvolvido em PHP OO MVC, javascript e css.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="error">
                                    Atualmente Inativo - Exemplo somente demonstração.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={5} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Hotel Dog Ville
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Site e sistema para o hotel (incluindo design e layout) desenvolvido individualmente por mim.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Tecnologias utilizadas: PHP - Lumen, Angular.js, e Material Design.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="primary">
                                    Site ainda Ativo atualmente.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={6} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Interpoli - POLI/UFRJ
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Arquitetura do Banco de dados, Design e implementação do layout do sistema de integração do
                                    intercâmbio da escola politécnica da UFRJ.
                                    (O desenvolvimento do resto do sistema - parte de controle, requisições e acesso a dados - ficou
                                    a cargo de outro desenvolvedor que deu continuidade ao projeto)
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="textPrimary">
                                    Desenvolvido inicialmente em PHP OO MVC, javacsript e CSS, utilizando minha própria framework PHP.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="error">
                                    Atualmente Inativo - Exemplo somente demonstração.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={7} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Evento da Pulsar Ej
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Site para promoção e vendas de um evento da empresa júnior Pulsar, da Educação Física da UFRJ.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="textPrimary">
                                    Desenvolvido inicialmente em PHP OO MVC, javacsript e CSS, utilizando minha própria framework PHP.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="error">
                                    Atualmente Inativo - Exemplo somente demonstração.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={8} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Framework PHP
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Framework PHP desenvolvida para proporcionar ao desenvolvedor um ambiente confiável para estruturar
                                    um sistema PHP Orientado à Objetos (OO) em arquitetura MVC (Model-View-Controller) com diversas
                                    funcionalidades de código automatizadas.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="textPrimary">
                                    Utilizei as bibliotecas SmartyPHP e o PhpActiveRecords, em cima dos clássicos:
                                    PHP, HTML, JavaScript e CSS dentro das melhores práticas da época citadas acima.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="error">
                                    Projeto descontinuado em 2013 - Código disponível no GitHub somente para demonstração.
                                </Typography>
                            </Card>
                        </Grid>
                        <Grid item key={9} xs={6}>
                            <Card className={classes.paper} elevation={2}>
                                <Typography variant="h4" component="h2" className={classes.text} gutterBottom>
                                    Este site aqui! :)
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text}>
                                    Este site que vos fala, que além das paginas básicas que o compõe, também engloba versões com
                                    funcionalidades de testes de diversos sistemas antigos que eu desenvolvi que já não estão mais no ar
                                    (clique neles e veja!); além de um ChatBot (ou Robô de Conversação) que tem a função de apresentar
                                    o site conversando com o usuário como se fosse um atendente virtual.
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="textPrimary">
                                    Utilizei o SmartyPHP e o
                                </Typography>
                                <Typography variant="body2" component="p" className={classes.text} color="primary">
                                    Navegue através dele e saia clicando nas coisas para testá-lo.
                                </Typography>
                            </Card>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
        );
    }
}


Sistemas.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sistemas);
