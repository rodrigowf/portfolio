import React from 'react';
import A from '../helpers/A';
import Form from '../helpers/Form';

// import 'http://widgets.twimg.com/j/2/widget.js';

import '../css/index/index.css';

import banner_fly02 from "../images/banner_fly02.png";
import banner_fly01 from "../images/banner_fly01.png";

import prefParaty from "../images/empresas/prefParaty.jpg";
import ambev from "../images/empresas/ambev.png";
import itau from "../images/empresas/itau.png";
import voe from "../images/empresas/voe.jpg";
import odebrecht from "../images/empresas/odebrecht.png";
import sebrae from "../images/empresas/sebrae.png";
import visagio from "../images/empresas/visagio.jpg";
import firjan from "../images/empresas/firjan.jpg";
import czm from "../images/empresas/czm.png";
import ieg from "../images/empresas/ieg.jpg";
import tarpon from "../images/empresas/tarpon.png";

import republicaAm from "../images/empresas/republicaAm.png";
import paratyConv from "../images/empresas/paratyConv.jpg";
import sagre from "../images/empresas/sagre.jpg";
import pe_logo from "../images/empresas/pe_logo.jpg";
import threejoylogo from "../images/empresas/threejoylogo.jpg";
import bigbeacon from "../images/empresas/bigbeacon.png";
import paprika from "../images/empresas/paprika.png";
import compactor from "../images/empresas/compactor.png";

import artemisia from "../images/empresas/artemisia.jpg";
import boc from "../images/empresas/boc.jpg";
import designEchos from "../images/empresas/designEchos.png";
import alianca from "../images/empresas/alianca.png";
import ufjf from "../images/empresas/ufjf.jpg";
import school_of_life from "../images/empresas/school_of_life.jpg";
import tam from "../images/empresas/tam.jpg";
import fundBrava from "../images/empresas/fundBrava.jpg";
import endeavor from "../images/empresas/endeavor.png";
import fairObserver from "../images/empresas/fairObserver.jpg";
import fundEstudar from "../images/empresas/fundEstudar.png";
import ciaDeTalentos from "../images/empresas/ciaDeTalentos.jpg";
import neoTrip from "../images/empresas/neoTrip.png";
import bain from "../images/empresas/bain.png";
import jfmg from "../images/empresas/jfmg.png";
import innvent from "../images/empresas/innvent.png";

import home_the_biggest_event from "../images/home_the_biggest_event.png";


function Index() {

    const lang = 'pt-br';
    const noticia = [
        {
            titulo: 'Isso é apenas uma Demonstração do sistema original',
            descricao: 'Está notícia foi escrita por Rodrigo Werneck só para lemnbrar que este site inteiro não' +
                'funciona realmente, mas está aqui apenas como demonstração do meu trabalho no passado.',
        }
    ];
    
    return (
        <div>
            <div className="esquerda">
                {/*
                <div id="slideshow">
                    {a action="inscricao" controller="usuarios"}{svg file="Register-01.svg" className="bannerImage" width='620' height='250'}</A>
                    {a action="inscricao" controller="usuarios" style="display:none"}{svg file="Register-02.svg" className="bannerImage" width='620' height='250'}</A>
                    {a action="inscricao" controller="usuarios" style="display:none"}{svg file="Register-03.svg" className="bannerImage" width='620' height='250'}</A>
                </div>
                */}
                <div id="slideshow">
                    {/*
                    {a action="city" controller="index" style="display:none"}<img src="{$_IMAGES}Banner_site-01.png" width="620" height="250" /></A>
                    {a action="speakers" controller="index" style="display:none"}<img src="{$_IMAGES}Banner_site-02.png" width="620" height="250" /></A>
                    {a action="schedule" controller="index" style="display:none"}<img src="{$_IMAGES}Banner_site-03.png" width="620" height="250" /></A>
                        <a href="http://neotrip.net/jewc2012/" style="display:none"><img src="{$_IMAGES}Banner_TRANSFER-02.png" width="620" height="250" /></a>
                        <a href="http://neotrip.net/jewc2012/" style="display:none"><img src="{$_IMAGES}Banner_TRANSFER-01.png" width="620" height="250" /></a>
                    */}
                    {lang === 'en' ?
                        (<A action="staralliance" controller="index"><img alt="Fly with Tam" src={banner_fly02} width={620} height={250} /></A>)
                        :
                        (<A action="tam" controller="index"><img alt="Voe de Tam" src={banner_fly01} width={620} height={250} /></A>)
                    }
                </div>

                <div className="conteudo">
                    <h3>JEWC 2012</h3>
                    <p>Junior Enterprise World Conference (JEWC) is the biggest event of the planet for the Junior Entrepreneurs (or ever for the ones that want to become). From 6th to 10th of August, participants will be invited to increase their experience and get to know different cultures from the enterpreneurial world, gathering senior and young entrepreneurs - people who, despite their cultural distance, have the same thoughts and the same ambitions.</p>
                    <p>We want to spread the word, put all the junior entrepreneurs together to share knowledge and experiences. For the main workshops, important names of the global entrepreneurial scenario have already confirmed their presence.</p>

                    <div className="blog">

                        <h3>WHAT'S NEW?</h3>
                        <p className="blogTitle">{noticia[0].titulo}</p>
                        <p className="blogSummary">{noticia[0].resumo}</p>
                    </div>
                    <a href="./noticias/visualizar/{$noticia[0]['noticias']['idNoticia']}" id="blogLink" className="button small goBlog">READ MORE</a>


                    <div className="paraty">

                        <h3>PARATY, RJ - BRAZIL</h3>
                        <p>For the first time, JEWC 2012 will have a Host City, instead of a host hotel: JEWC City! We’ll have a whole city envolved and mobilized to host the biggest event of the world.</p>
                        <p>The choice of Paraty in the Rio de Janeiro State was not hard at all. Its consolidated touristic structure, allied to its architectural and natural attractions wouldn’t give room to any doubt. Besides, it is already the city where the biggest literary encounter of the country, Paraty’s International Literay Fair (FLIP) takes place.</p>
                    </div>
                    <A action="city" id="cityLink" className="button small goCity">GET TO KNOW</A>
                </div>


                <div id="empresas">
                    <h3>WHO'S WITH US</h3>
                    <div className="patrocinadores">
                        <h4>SPONSORS</h4>
                        <a id="prefParaty" className="diamante" href=""><img alt="Prefeitura de Paraty"                     src={prefParaty} /></a>
                        <a id="ambev" className="diamante" href="http://www.ambev.com.br"><img alt="Ambev"                  src={ambev}      /></a>
                        <a id="itau" className="diamante" href="http://www.itau.com.br"><img alt="Itaú"                     src={itau}       /></a>
                        <br />
                        <a id="voeEventos" className="diamante" href="http://www.voeeventos.com.br"><img alt="Voe Eventos"  src={voe}        /></a>
                        <a id="odebrecht" className="ouro" href="http://www.odebrecht.com.br"><img alt="Odebrecht"          src={odebrecht}  /></a>
                        <br />
                        <a id="sebrae" className="ouro" href="http://www.sebrae.com.br"><img alt="Sebrae"                   src={sebrae}     /></a>
                        <a id="visagio" className="ouro" href="http://www.visagio.com"><img alt="Visagio"                   src={visagio}    /></a>
                        <br />
                        <a id="firjan" className="ouro" href="http://www.firjan.org.br"><img alt="Firjan"                   src={firjan}     /></a>
                        <a id="czm" className="ouro" href="http://www.czm.com.br"><img alt="Czm"                            src={czm}        /></a>
                        <a id="ieg" className="ouro" href="http://www.institutodegestao.com.br/"><img alt="IEG"             src={ieg}        /></a>
                        <a id="tarpon" className="ouro" href="http://www.tarponinvest.com.br"><img alt="Tarpon"             src={tarpon}     /></a>
                    </div>
                    <div className="apoiadores">
                        <h4>SUPPORT</h4>
                        <a id="republica" href="http://www.republicaonline.com.br"><img alt="República Marketing Universitário" src={republicaAm}    /></a>
                        <a id="paratyConv" href="http://www.paratycvb.com.br"><img alt="Paraty Convention & Visitors Bureau"    src={paratyConv}     /></a>
                        <br />
                        <a id="sagre" href="http://www.sagre.com.br"><img alt="Sagre Consultoria"                               src={sagre}          /></a>
                        <a id='cinema_nosso' href="http://www.cinemanosso.org.br/"><img alt="Cinema Nosso"                      src={pe_logo}        /></a>
                        <br />
                        <a id="threejoy" href="http://threejoy.com/"><img alt="Three Joy"                                       src={threejoylogo}   /></a>
                        <a id="bigbeacon" href="http://bigbeacon.org"><img alt="Big Beacon"                                     src={bigbeacon}      /></a>
                        <br />
                        <a id='papirika' href="http://www.paprikamix.me/index.html"><img alt="Paprika"                          src={paprika}        /></a>
                        <a id='compactor' href="http://www.compactor.com.br/"><img alt="Compactor"                              src={compactor}      /></a>

                        <br />
                        <br />
                    </div>
                    <div className="parceiros">
                        <h4>PARTNERS</h4>
                        <a id="artemisia" href="http://www.artemisia.org.br"><img alt="Artemísia"                           src={artemisia}      /></a>
                        <a id="boc" href="http://www.battleofconcepts.com.br"><img alt=""                                   src={boc}            /></a>
                        <a id="designEchos" href="http://www.designechos.com.br"><img alt="Design Echos"                    src={designEchos}    /></a>
                        <a id="alianca" href="http://www.aliancaempreendedora.com.br"><img alt="Aliança Empreendedora"      src={alianca}        /></a>
                        <a id="ufjf" href="http://www.ufjf.br"><img alt="UFJF"                                              src={ufjf}           /></a>
                        <a id="school_of_life" href=""><img alt="School of Life"                                            src={school_of_life} /></a>
                        <A id="tam" action="tam"><img alt="TAM"                                                             src={tam}            /></A>
                        <a id="fundBrava" href="http://www.brava.org.br"><img alt="Fundação Brava"                          src={fundBrava}      /></a>
                        <a id="endeavor" href="http://www.endeavor.org.br"><img alt="Endeavor"                              src={endeavor}       /></a>
                        <a id="fairObserver" href="http://www.fairobserver.com"><img alt="Fair Observer"                    src={fairObserver}   /></a>
                        <a id="fundEstudar" href="http://www.estudar.org.br"><img alt="Fundação Estudar"                    src={fundEstudar}    /></a>
                        <a id="ciaDeTalentos" href="http://www.ciadetalentos.com.br/"><img alt="Cia de Talentos"            src={ciaDeTalentos}  /></a>
                        <a id="neoTrip" href="http://www.neotrip.net/"><img alt="Neotrip"                                   src={neoTrip}        /></a>
                        <a id="bain" href="http://www.bain.com.br"><img alt="Bain & Co."                                    src={bain}           /></a>
                        <a id="jfmg" href="http://www.jfmg.com.br"><img alt="JFMG"                                          src={jfmg}           /></a>
                        <a id="innvent" href="http://www.innvent.com.br"><img alt="Innvent"                                 src={innvent}        /></a>
                    </div>
                </div>
            </div>

            <div className="direita">

                <ul className="menuHome">
                    <A action="speakers"><li className="palestrantes"><span>SPEAKERS</span> <small>Check out the confirmed speakers</small></li></A>
                    <A action="startupscontest"><li className="startup"><span>STARTUPS CONTEST</span>  <small>Submit your startup idea</small></li></A>
                    <A action="schedule"><li className="programacao"><span>SCHEDULE</span> <small>Day by day, what is gonna happen</small></li></A>
                    <A action="city"><li className="cidade"><span>THE CITY</span> <small>Know more about Paraty, the JEWC City</small></li></A>
                    {/* a action="city"}<li className="outro"><span>THE CITY</span> <small>Get to know a bit more about Paraty and JEWC City</small></li>{/a */}
                </ul>


                <div className="newsletter">
                    <h3 className="newsletterTitle subsectionTitle">NEWSLETTER</h3>
                    <p className="newsletterSubtitle">Register your e-mail and get heads up <br /> about the event</p>
                    <Form id="newsForm">
                        <input name="data[index][email]" className="email" value=""/> <br/>
                        <button type="submit" className="mailSubmit">GET ME UPDATED!</button>
                    </Form>
                </div>


                <div className="facebookBox">
                    <h3 className="tituloH3 subsectionTitle">I'M DEFINITELY GOING</h3>
                    <div className="fb-like-box" data-href="http://www.facebook.com/jewc2012" data-width="270" data-height="327" data-show-faces="true" data-border-color="#ffffff" data-stream="false" data-header="false">
                    </div>
                </div>

                <div className="twitterBox">
                    <h3 className="tituloH3 subsectionTitle">WHATS ON TWITTER</h3>
                    {/*
                    <script>
                        new TWTR.Widget({
                          version: 2,
                          type: 'profile',
                          rpp: 4,
                          interval: 30000,
                          width: 270,
                          height: 300,
                          theme: {
                            shell: {
                              background: '#ffffff',
                              color: '#000000'
                            },
                            tweets: {
                              background: '#ffffff',
                              color: '#30302f',
                              links: '#949494'
                            }
                          },
                          features: {
                            scrollbar: false,
                            loop: false,
                            live: true,
                            behavior: 'all'
                          }
                        }).render().setUser('jewc2012').start();
                    </script>
                    */}
                </div>

                <div className="row">
                    <div id="contagem">
                        <h3 id="countTitle" className="subsectionTitle">COUNTDOWN</h3>
                        {/*<h1 className="dias"> {$countdown}</h1>*/}
                        <h1 className="dias"> 15</h1>
                        <p id="countSubtitle">days to the Biggest Event <br /> of the World! Can't wait!</p>
                    </div>
                    <div id="biggestEvent">
                        <img src={home_the_biggest_event} width={101} height={134} alt="biggest event" />
                    </div>
                </div>
                {/*
                <div className="climaJewc">
                    <h3>CLIMA JEWC</h3>
                    <p>Faça o download exclusivo de material do JEWC para você entrar no clima do evento! Clique aqui e veja a barra à direita.</p>
                    <a>ME PÕE NO CLIMA</a>
                </div>
                */}
            </div>
        </div>
    );
}

export default Index;