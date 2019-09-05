import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import A from '../helpers/A';

import routes from '../routes';

function Index() {

    const lang = 'pt-br';
    
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
                        (<A action="staralliance" controller="index"><img alt="Voe de Tam" src="../images/banner_fly02.png" width="620" height="250" /></A>)
                        :
                        (<A action="tam" controller="index"><img alt="Fly with Tam" src="../images/banner_fly01.png" width="620" height="250" /></A>)
                    }
                </div>
        
                <div className="conteudo">
                    <h3>JEWC 2012</h3>
                    <p>Junior Enterprise World Conference (JEWC) is the biggest event of the planet for the Junior Entrepreneurs (or ever for the ones that want to become). From 6th to 10th of August, participants will be invited to increase their experience and get to know different cultures from the enterpreneurial world, gathering senior and young entrepreneurs - people who, despite their cultural distance, have the same thoughts and the same ambitions.</p>
                    <p>We want to spread the word, put all the junior entrepreneurs together to share knowledge and experiences. For the main workshops, important names of the global entrepreneurial scenario have already confirmed their presence.</p>
        
                    <div className="blog">
        
                        <h3>WHAT'S NEW?</h3>
                        <p className="blogTitle">{$noticia[0]['noticias']['Titulo']}</p>
                        <p className="blogSummary">{$noticia[0]['noticias']['Resumo']}</p>
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
                        <a id="prefParaty" className="diamante" href=""><img alt="Prefeitura de Paraty" src="../images/prefParaty.jpg" /></a>
                        <a id="ambev" className="diamante" href="http://www.ambev.com.br"><img alt="Ambev" src="../images/empresas/ambev.png" /></a>
                        <a id="itau" className="diamante" href="http://www.itau.com.br"><img alt="Itaú" src="../images/empresas/itau.png" /></a>
                        <br />
                        <a id="voeEventos" className="diamante" href="http://www.voeeventos.com.br"><img alt="Voe Eventos" src="../images/empresas/voe.jpg" /></a>
                        <a id="odebrecht" className="ouro" href="http://www.odebrecht.com.br"><img alt="Odebrecht" src="../images/empresas/odebrecht.png" /></a>
                        <br />
                        <a id="sebrae" className="ouro" href="http://www.sebrae.com.br"><img alt="Sebrae" src="../images/empresas/sebrae.png" /></a>
                        <a id="visagio" className="ouro" href="http://www.visagio.com"><img alt="Visagio" src="../images/empresas/visagio.jpg" /></a>
                        <br />
                        <a id="firjan" className="ouro" href="http://www.firjan.org.br"><img alt="Firjan" src="../images/empresas/firjan.jpg" /></a>
                        <a id="czm" className="ouro" href="http://www.czm.com.br"><img alt="Czm" src="../images/empresas/czm.png" /></a>
                        <a id="ieg" className="ouro" href="http://www.institutodegestao.com.br/"><img alt="IEG" src="../images/empresas/ieg.jpg" /></a>
                        <a id="tarpon" className="ouro" href="http://www.tarponinvest.com.br"><img alt="Tarpon" src="../images/empresas/tarpon.png" /></a>
                    </div>
                    <div className="apoiadores">
                        <h4>SUPPORT</h4>
                        <a id="republica" href="http://www.republicaonline.com.br"><img alt="República Marketing Universitário" src=".images/empresas/republicaAm.png" /></a>
                        <a id="paratyConv" href="http://www.paratycvb.com.br"><img alt="Paraty Convention & Visitors Bureau" src="../images/empresas/paratyConv.jpg" /></a>
                        <br />
                        <a id="sagre" href="http://www.sagre.com.br"><img alt="Sagre Consultoria" src="../images/empresas/sagre.jpg" /></a>
                        <a id='cinema_nosso' href="http://www.cinemanosso.org.br/"><img src="../images/empresas/pe_logo.jpg" alt="Cinema Nosso"></a>
                        <br />
                        <a id="threejoy" href="http://threejoy.com/"><img alt="Three Joy" src="../images/empresas/threejoylogo.jpg" /></a>
                        <a id="bigbeacon" href="http://bigbeacon.org"><img alt="Big Beacon" src="../images/empresas/bigbeacon.png" /></a>
                        <br />
                        <a id='papirika' href="http://www.paprikamix.me/index.html"><img src="../images/empresas/paprika.png" alt="Paprika"></a>
                        <a id='compactor' href="http://www.compactor.com.br/"><img src="../images/empresas/compactor.png" alt="Compactor"></a>
                        
                        <br />
                        <br />
                    </div>
                    <div className="parceiros">
                        <h4>PARTNERS</h4>
                        <a id="artemisia" href="http://www.artemisia.org.br"><img alt="Artemísia" src="../images/empresas/artemisia.jpg" /></a>
                        <a id="boc" href="http://www.battleofconcepts.com.br"><img alt="" src="../images/empresas/boc.jpg" /></a>
                        <a id="designEchos" href="http://www.designechos.com.br"><img alt="Design Echos" src="../images/empresas/designEchos.png" /></a>
                        <a id="alianca" href="http://www.aliancaempreendedora.com.br"><img alt="Aliança Empreendedora" src="../images/empresas/alianca.png" /></a>
                        <a id="ufjf" href="http://www.ufjf.br"><img alt="UFJF" src="../images/empresas/ufjf.jpg" /></a>
                        <a id="school_of_life" href=""><img alt="School of Life" src="../images/empresas/school_of_life.jpg" /></a>
                        <A id="tam" action="tam"><img alt="TAM" src="../images/empresas/tam.jpg" /></A>
                        <a id="fundBrava" href="http://www.brava.org.br"><img alt="Fundação Brava" src="../images/empresas/fundBrava.jpg" /></a>
                        <a id="endeavor" href="http://www.endeavor.org.br"><img alt="Endeavor" src="../images/empresas/endeavor.png" /></a>
                        <a id="fairObserver" href="http://www.fairobserver.com"><img alt="Fair Observer" src="../images/empresas/fairObserver.jpg" /></a>
                        <a id="fundEstudar" href="http://www.estudar.org.br"><img alt="Fundação Estudar" src="../images/empresas/fundEstudar.png" /></a>
                        <a id="ciaDeTalentos" href="http://www.ciadetalentos.com.br/"><img alt="Cia de Talentos" src="../images/empresas/ciaDeTalentos.jpg" /></a>
                        <a id="neoTrip" href="http://www.neotrip.net/"><img alt="Neotrip" src="../images/empresas/neoTrip.png" /></a>
                        <a id="bain" href="http://www.bain.com.br"><img alt="Bain & Co." src="../images/empresas/bain.png" /></a>
                        <a id="jfmg" href="http://www.jfmg.com.br"><img alt="JFMG" src="../images/empresas/jfmg.png" /></a>
                        <a id="innvent" href="http://www.innvent.com.br"><img alt="Innvent" src="../images/empresas/innvent.png" /></a>
                    </div>
                </div>
        
        
            </div>
            <div className="direita">
        
                <ul className="menuHome">
                    <A action="speakers"><li className="palestrantes"><span>SPEAKERS</span> <small>Check out the confirmed names to speak on the event</small></li></A>
                    <A action="startupscontest"><li className="startup"><span>STARTUPS CONTEST</span>  <small>Submit your startup idea</small></li></A>
                    <A action="schedule"><li className="programacao"><span>SCHEDULE</span> <small>Day by day, what is gonna happen</small></li></A>
                    <A action="city"><li className="cidade"><span>THE CITY</span> <small>Get to know a bit more about Paraty and JEWC City</small></li></A>
                    {/* a action="city"}<li className="outro"><span>THE CITY</span> <small>Get to know a bit more about Paraty and JEWC City</small></li>{/a */}
                </ul>
        
        
                <div className="newsletter">
                    <h3 className="newsletterTitle subsectionTitle">NEWSLETTER</h3>
                    <p className="newsletterSubtitle">Register your e-mail and get heads up %br about the event</p>
                    <Form id="newsForm">
                        <input name="data[index][email]" className="email" value="{$errorMsg}"/> <br/>
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
                    <script charset="utf-8" src="http://widgets.twimg.com/j/2/widget.js">
                    </script>
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
                </div>
        
        
                <div className="row">
                    <div id="contagem">
                        <h3 id="countTitle" className="subsectionTitle">COUNTDOWN</h3>
                        {/*<h1 className="dias"> {$countdown}</h1>*/}
                        <h1 className="dias"> 0</h1>
                        <p id="countSubtitle">days to the Biggest Event %br of the World! Can't wait!</p>
                    </div>
                    <div id="biggestEvent">
                        <img src="../images/home_the_biggest_event.png" width="101" height="134" />
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