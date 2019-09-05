import React from 'react';
import { Route } from "react-router-dom";
import A from './helpers/A';

import routes from './routes';

import './css/reset.css';
import './css/print.css';
import './css/typography.css';
import './css/forms.css';
import './css/defaults.css';
import './css/body.css';

import background from './images/background.svg';

function Jewc() {

    const switchLocale = 'pt-br';

    return (
        <React.Fragment>
            <div className="svgBackground">
                <img src={background} alt="Imagem de fundo" className="svgBackground" width={'100%'} height={'100%'} />
            </div>
            <div className="container">
                <div id="layoutUp">
                    <div className="topo">
                        <div className="titulo">
                            <A className="logo" action="index" controller="index"><span>JEWC 2012</span></A>
                            <div className="subtitulo">
                                <p className="big">Junior Enterprise World Conference</p>
                                <p>Paraty, Rio de Janeiro - Brazil</p>
                                <p>August 6-10, 2012</p>
                            </div>
                        </div>
                        <div className="redesSociais">
                            <h4>SPREAD THE WORD</h4>
                            <a className="facebook" href="http://www.facebook.com/pages/JEWC-2012/249307708415706" rel="noopener noreferrer" target="_blank">
                                <span>Facebook</span>
                            </a>
                            <a className="twitter" href="http://twitter.com/jewc2012" rel="noopener noreferrer" target="_blank">
                                <span>Twitter</span>
                            </a>
                        </div>
                    </div>

                    <div className="barraMenu">
                        <div className="menu">
                            <ul>
                                <li className="home"><A action="index" controller="index">Home</A></li>
                                <li className="inscricao"><A action="inscricao" controller="usuarios">Registration</A></li>
                                <li className="conferencia dropdown"><A action="conference" controller="index">The Conference</A>
                                    <ul className="dropdown">
                                        <li className='jewc2012'><A action="conference" controller="index">JEWC 2012</A></li>
                                        <li className='speakers'><A action="speakers" controller="index">Speakers</A></li>
                                        <li className='submission'><A action="submission" controller="cases">Case Studies</A></li>
                                        <li className='schedule'><A action="schedule" controller="index">Schedule</A></li>
                                        <li className='city'><A action="city" controller="index">The City</A></li>
                                    </ul>
                                </li>
                                <li className="noticias"><A controller="noticias" action="index">Blog</A></li>
                                <li className="fale"><A action="index" controller="fale_conosco">Talk to Us</A></li>
                                <li className='login'><A action="login" controller="usuarios">Login</A></li>
                            </ul>
                        </div>
                        <div className="idioma">
                            {switchLocale}
                        </div>
                    </div>
                </div>
                <div id="bodyContent">
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    ))}
                </div>
                <div id="rodape">
                    <div id="organizacao">
                        <h4>BROUGHT TO YOU BY</h4>
                        <a id="jade" href="http://www.jadenet.org/" rel="noopener noreferrer" target="_blank"><span>Jade</span></a>
                        <a id="brasiljunior" href="http://www.brasiljunior.com.br" rel="noopener noreferrer" target="_blank"><span>Brasil Júnior</span></a>
                    </div>
                    <div id="apoio">
                        <h4>SUPPORTED BY</h4>
                        <a id="fejemg" href="http://www.fejemg.org.br" rel="noopener noreferrer" target="_blank"><span>FEJEMG</span></a>
                        <a id="riojunior" href="http://www.riojunior.com.br" rel="noopener noreferrer" target="_blank"><span>RioJunior</span></a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Jewc;