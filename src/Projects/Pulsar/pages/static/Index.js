﻿import React from 'react';
// import A from '../helpers/A';
// import Form from '../helpers/Form';

import '../../styles/index/index.css';

function Index() {

    return (
        <React.Fragment>
            {/* Main hero unit for a primary marketing message or call to action */}
            <div className="hero-unit" id="teste1">
                <h1>Site teste Werneck.</h1>
                <p>Esse é o primeiro site que eu construo com a minha engine última versão. <br /> Serve como exmplo e também como teste para que eu melhore ela conforme o desenvolvo.</p>
                <a className="btn primary large">Learn more &raquo;</a>
            </div>

            {/* Example row of columns */}
            <div className="row">
                <div className="span4">
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn" href="#">View details &raquo;</a></p>
                </div>
                <div className="span4">
                    <h2>Heading</h2>
                    <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
                    <p><a className="btn" href="#">View details &raquo;</a></p>
                </div>
                <div className="span4">
                    <h2>Heading</h2>
                    <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                    <p><a className="btn" href="#">View details &raquo;</a></p>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Index;