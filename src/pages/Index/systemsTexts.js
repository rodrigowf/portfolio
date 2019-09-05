import React from "react";

import logo_jewc from '../../images/project_logos/jewc.png';
import logo_seti from '../../images/project_logos/seti.png';
import logo_interpoli from '../../images/project_logos/logo_interpoli_pq.png';
import logo_pulsar_party from '../../images/project_logos/pulsar_party.png';
import logo_dogville from '../../images/project_logos/hoteldv.png';

import print_jewc from '../../images/web_pages/jewc.jpg';
import print_dogville from '../../images/web_pages/dogville.jpg';
import print_intellegi from '../../images/web_pages/Intellegi.png';
import print_interpoli from '../../images/web_pages/interpoli.jpg';
import print_pulsar from '../../images/web_pages/pulsar.jpg';
import print_seti from '../../images/web_pages/seti.jpg';


export const textContent = {
    pt: {
        main_title : "{icon} Sites e Sistemas",
        main_subtitle: "desenvolvidos por mim",
    },
    en: {
        main_title : "{icon} Websites and Systems",
        main_subtitle: "developed by me",
    }
};

export const systems = {
    en: [
        {
            id: "intellegi",
            title: <big>Intellegi</big>,
            subheader: "Legislation database portal",
            image: print_intellegi,
            description: 'Open plataform for consulting pending legislation on Brazilian Congress.',
            technology: 'Used tecnologies: React.js, Material Design Patterns, Brazilian Congress open API.',
            status: 'Still active today.',
            statusBool: true,
            link: '/sistemas/intellegi',
        },
        {
            id: "dogville",
            title: <big>Dog Ville Hotel</big>,
            logo: logo_dogville,
            // subheader: (<div>&nbsp;</div>),
            image: print_dogville,
            description: 'Website and management system for the hotel. (including design, logo and layout) developed entirely by me independently. ',
            technology: 'Used technologies: PHP - Lumen, Angular.js, and Material Design. Logo and layout images done with Adobe Photoshop',
            status: 'Still active today.',
            statusBool: true,
            link: 'http://www.hoteldogville.com.br',
            external: true,
        },
        {
            id: "pulsar",
            title: "Pulsar Party",
            logo: logo_pulsar_party,
            image: print_pulsar,
            description: 'Website for the promotion and selling for a party of the Pulsar junior enterprise (UFRJ).',
            technology: 'Developed initially in PHP OO MVC, javacsript and CSS, using my own PHP Framework. ',
            status: 'Inactive today - Just demonstration example.',
            statusBool: false,
            link: '/sistemas/pulsar',
        },
        {
            id: "jewc",
            title: "JEWC",
            logo: logo_jewc,
            subheader: "Junior Enterprise World Conference ",
            image: print_jewc,
            description:<span>In this project i worked with the team that implemented all the website and system for
                the event <small>(subscription, reserve allocation, orientation, etc..),
                Another team made the design.
                Besides that, i also worked as staff and party management at this conference.</small>
                </span>,
            technology: 'The system was developed with PHP OO MVC, javascript e css, ' +
                'using a php framework developed by myself at the previous year.',
            status:  'Inactive today - Just demonstration example.',
            statusBool: false,
            link: '/sistemas/jewc',
        },
        {
            id: "interpoli",
            title: "Interpoli",
            logo: logo_interpoli,
            subheader: "Politécnica da UFRJ ",
            image: print_interpoli,
            description: <span>Database architecture, design and implementation of the layout of the system for
                interaction of studants of interchange of the polytechnic school of UFRJ. <br/>
                <small>(The rest of the system - controller, data access, etc,
                    was finished by another developer who continued the project)</small></span>,
            technology: 'Developed initially with PHP OO MVC, javacsript and CSS, using my own PHP framework. ',
            status: 'Inactive today - Just demonstration example.',
            statusBool: false,
            link: '/sistemas/interpoli',
        },
        {
            id: "seti",
            title: "SETI",
            logo: logo_seti,
            subheader: "UFRJ's Inovation and technology week",
            image: print_seti,
            description:<span>In this project i created the logo, and worked at the team that developed the system
                to the conference (subscription, orientation, etc.) including the layout. <br/>
                At this conference i also worked with the marketing team and as staff.</span>,
            technology: 'The system was developed with PHP MVC OO, javascript and css. ',
            status: 'Inactive today - Just demonstration example.',
            statusBool: false,
            link: '/sistemas/seti',
        },
        {
            id: "matematica",
            title: "Aplied Mathematics Institute",
            subheader: "UFRJ",
            description:'Website with institutional content of the Aplied Mathematics Institute of UFRJ and subpages ' +
                'for it´s disciplines with their content in text, LaTeX and vídeos or animations.',
            technology: 'Developed by me in Wordpress (plataform ofered by the institute) with the work of ' +
                'adapting the html, javascript and css besides the plataform itself.',
            status: 'Still active today.',
            statusBool: true,
        },
        {
            id: "framework",
            title: 'PHP Framework ',
            description: 'A PHP Framework developed entirely by me to provide to the developer a trusted environment ' +
                'to structure his PHP system Object Oriented (OO) in an MVC architecture (Model-View-Controller)' +
                'with a variety of automated functionalities',
            technology:'I used the libraries: SmartyPHP, PhpActiveRecords, and jQuery on top of the classics: ' +
                'PHP, HTML, JavaScript e CSS whraped together with the best practices mentioned above..',
            status: 'Project discontinued at 2013 - Source code available on GitHub only for demonstration proposes. ',
            statusBool: false,
        },
        {
            id: "site",
            title: 'This site right here! :) ',
            description: 'This site right here. That goes beyond the basic pages that composes it, ' +
                'it has entire versions of various old websites i made that were currently unavailable ' +
                '(click through and see for yourself!). It also contains a Chat Bot with the functionality ' +
                'of introducing me and my work by talking to you.',
            technology: 'Made with o ReactJs, Material Design and Node.js ',
            status: 'Site',
            statusBool: true,
        },
    ],
    pt: [
        {
            id: "intellegi",
            title: <big>Intellegi</big>,
            subheader: "Portal de consultas políticas",
            image: print_intellegi,
            description:'Sistema aberto para consulta de tramitações de projetos de lei que ocorrem na Câmara dos deputados do Brasil.',
            technology:'React.js, Material Design Patterns, a API do banco de dados abertos da Câmara.',
            status: 'Site Ativo atualmente.',
            statusBool: true,
            link: '/sistemas/intellegi',
        },
        {
            id: "dogville",
            title: <big>Hotel Dog Ville</big>,
            logo: logo_dogville,
            // subheader: (<div>&nbsp;</div>),
            image: print_dogville,
            description:'Site e sistema para o hotel (incluindo design, logotipo e layout) desenvolvido inteiramente por mim individualmente. ',
            technology:'Tecnologias utilizadas: PHP - Lumen, Angular.js, e Material Design. Logotipo e imagens de layout feitos no Adobe Photoshop',
            status: 'Site Ativo atualmente. ',
            statusBool: true,
            link: 'http://www.hoteldogville.com.br',
            external: true,
        },
        {
            id: "pulsar",
            title: "Pulsar Party",
            logo: logo_pulsar_party,
            image: print_pulsar,
            description:  'Site para promoção e vendas de um evento da empresa júnior Pulsar, da Educação Física da UFRJ. ',
            technology: 'Desenvolvido inicialmente em PHP OO MVC, javacsript e CSS, utilizando minha própria framework PHP. ',
            status:  'Atualmente Inativo - Exemplo somente demonstração. ',
            statusBool: false,
            link: '/sistemas/pulsar',
        },
        {
            id: "jewc",
            title: "JEWC",
            logo: logo_jewc,
            subheader: "Junior Enterprise World Conference ",
            image: print_jewc,
            description:<span>Nesse projeto eu participei da equipe que implementou todo o site e sistema para o evento
                <small>. (cadastro, alocação de reservas, orientações, etc..), <br/>
                Sendo outra equipe que elaborou o design.
                Além disso, nesse evento também participei das equipes de gestão e planejamento das festas e staff.</small></span>,
            technology:'O sistema foi desenvolvido em PHP OO MVC, javascript e css, ' +
                'utilizando uma framework php que eu mesmo havia desenvolvido no ano anterior.',
            status: 'Atualmente Inativo - Exemplo somente demonstração.',
            statusBool: false,
            link: '/sistemas/jewc',
        },
        {
            id: "interpoli",
            title: "Interpoli",
            logo: logo_interpoli,
            subheader: "Politécnica da UFRJ ",
            image: print_interpoli,
            description: <span>Arquitetura do Banco de dados, Design e implementação do layout do sistema de integração do
                 intercâmbio da escola politécnica da UFRJ. <br/>
                <small>(O desenvolvimento do resto do sistema - parte de controle, requisições e acesso a dados - ficou
                a cargo de outro desenvolvedor que deu continuidade ao projeto)</small></span>,
            technology: 'Desenvolvido inicialmente em PHP OO MVC, javacsript e CSS, utilizando minha própria framework PHP. ',
            status:  'Atualmente Inativo - Exemplo somente demonstração. ',
            statusBool: false,
            link: '/sistemas/interpoli',
        },
        {
            id: "seti",
            title: "SETI",
            logo: logo_seti,
            subheader: "Semana da Tecnologia e Inovação da UFRJ ",
            image: print_seti,
            description:<span>Nesse projeto eu criei a logotipo e participei da equipe que desenvolveu todo o site e sistema
                para o evento (cadastro, orientações, etc..), incluindo o layout. <br/>
                Além disso, nesse evento também participei como staff e marketing.</span>,
            technology:'O sistema foi desenvolvido em PHP OO MVC, javascript e css. ',
            status: 'Atualmente Inativo - Exemplo somente demonstração. ',
            statusBool: false,
            link: '/sistemas/seti',
        },
        {
            id: "matematica",
            title: "Instituto de Matemática Aplicada",
            subheader: "UFRJ",
            description:'Site com conteúdo institucional do Instituto e sub páginas para as disciplínas com conteúdo em texto, Latex e vídeos ou animações.',
            technology:'Desenvolvido por mim em Wordpress (plataforma oferecida pela infra do instituto) com trabalho de adaptação do html, javascript e css.',
            status: 'Site ainda Ativo atualmente.',
            statusBool: true,
        },
        {
            id: "framework",
            title:  'Framework PHP ',
            description: 'Framework PHP desenvolvida para proporcionar ao desenvolvedor um ambiente confiável para estruturar ' +
                'um sistema PHP Orientado à Objetos (OO) em arquitetura MVC (Model-View-Controller) com diversas ' +
                'funcionalidades de código automatizadas.',
            technology:'Utilizei as bibliotecas SmartyPHP e o PhpActiveRecords, em cima dos clássicos: ' +
                'PHP, HTML, JavaScript e CSS dentro das melhores práticas da época citadas acima.',
            status:  'Projeto descontinuado em 2013 - Código disponível no GitHub somente para demonstração. ',
            statusBool: false,
        },
        {
            id: "site",
            title: 'Este site aqui! :) ',
            description:'Este site que vos fala, que além das paginas básicas que o compõe, também engloba versões com ' +
                'funcionalidades de testes de diversos sistemas antigos que eu desenvolvi que já não estão mais no ar ' +
                '(clique neles e veja!); além de um ChatBot (ou Robô de Conversação) que tem a função de apresentar ' +
                'o site conversando com o usuário como se fosse um atendente virtual.',
            technology:'Utilizei o ReactJs, Material Design e Node.js ',
            status: 'Site',
            statusBool: true,
        },
    ],
};