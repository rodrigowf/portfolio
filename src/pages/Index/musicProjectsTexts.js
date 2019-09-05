import React from "react";

import manakai from '../../images/band_logos/manakai.svg';
import werneckLessa from '../../images/band_logos/werneckLessa.jpg';
import lebanda from '../../images/band_logos/lebanda.png';
import bettersweet from '../../images/band_logos/bettersweet.jpg';


export const textContent = {
    pt: {
        main_title: "{icon} Projetos Musicais",
        main_subtitle: "Histórico de Bandas",
    },
    en: {
        main_title: "{icon} Musical Projects",
        main_subtitle: "Bands History",
    },
};


export const projects = {
    en: [
        {
            title: 'Manakai Band',
            image: manakai,
            description: <React.Fragment>Independent project by me, Rodrigo Lean and Matheus Branquinho. <br/>
                We compose and produce together totally independent.
                The 3 of us
                Compomos e produzimos juntos de forma totalmente independente
                nós 3 e mais alguns amigos colaboradores que participam na hora da interpretação. <br/>
                Os estilos no qual tocamos variam muito
                englobando muitas boas referências de todas as épocas
                vamos desde o Rap, passando pelo Rock, Samba e Reggae. Tocamos de tudo
                sem nenhum grande apego a nenhuma corrente específica</React.Fragment>,
            href: 'https://www.instagram.com/manakai_oficial/',
        },
        {
            title: 'Lessa & Werneck Project',
            image: werneckLessa,
            description: 'Project for Composing, and Musical production tottaly independenttly ' +
                'by me and my bass player friend, Matheus Lessa.\n' +
                'We make songs with a lot of influence of progressive rock of the 70´s,' +
                'but we don´t stick to that, in a way that enables us to insert a lot of good influences ' +
                'in our work, from brazilian culture, for instance - samba, mpb, baião brazilian soul or rap, ' +
                'besides country, blues, etc. ' +
                'We are the ones to blame for the "Rock no Mangue" Music festival At UFRJ and for -LeBanda Band.',
        },
        {
            title: '~LeBanda',
            image: lebanda,
            description: 'Independent band i participated as lead guitarrist ans backing vocal from 2009 to 2013.' +
                'We played popular US ans british Rock\'n Roll of the time (such as Strokes and Red Hot) ' +
                'besides classics such as Beatles and Rolling Stones and a few authorial songs.' +
                'We did a lot of shows at our UFRJ campus, mainly at the event we created, the "Rock no Mangue"',
            status: 'Band discontinued.',
            statusBool: false,
        },
        {
            title: 'Banda Bettersweet',
            image: bettersweet,
            description: <React.Fragment>Pocket-Band  i was part at 2013 as percussionist
                (cajon) and backing vocal. <br/>
                We played pop classics as The Police and Adelle mainly in shows friday at the beach in
                Barra da Tijuca, Rio de Janeiro, Brazil.</React.Fragment>,
            status: 'I stoped playing with them since 2013.',
            statusBool: false,
        },
    ],
    pt: [
        {
            title: 'Banda Manakai',
            image: manakai,
            description: <React.Fragment>Projeto composto por mim, Rodrigo Lean e Matheus Branquinho. <br/>
                Compomos e produzimos juntos de forma totalmente independente
                nós 3 e mais alguns amigos colaboradores que participam na hora da interpretação. <br/>
                Os estilos no qual tocamos variam muito
                englobando muitas boas referências de todas as épocas
                vamos desde o Rap, passando pelo Rock, Samba e Reggae. Tocamos de tudo
                sem nenhum grande apego a nenhuma corrente específica</React.Fragment>,
            href: 'https://www.instagram.com/manakai_oficial/',
        },
        {
            title: 'Projeto Lessa e Werneck',
            image: werneckLessa,
            description: 'Projeto de Composição, e Produção Musical desenvolvido de forma totalmente independente\n' +
                'por mim e meu amigo e baixista, Matheus Lessa.\n' +
                'Seguimos numa linha com muita influência do Rock Progressivo da década de 70,\n' +
                'mas não nos prendemos a isso, de modo que conseguimos inserir no nosso trabalho\n' +
                'muitas boas influências de toda a cultura nacional, seja do samba, mpb, baião, do soul\n' +
                'ou do rap, e também de outros estilos internacionais diversos, como o country e blues.\n' +
                'Nós fomos os responsáveis no passado pelo projeto Rock no Mangue e pela ~LeBanda.',
        },
        {
            title: '~LeBanda',
            image: lebanda,
            description: 'Banda Independente da qual eu fiz parte como guitarrista e vocal de apoio de 2009 à 2013.\n' +
                'Tocávamos Rock\'n Roll norte americano popular da época (como Red Hot e The Strokes),\n' +
                'além de rock clássico como Beatles e Rolling Stones e poucas músicas autorais.\n' +
                'Fizemos muitos shows pelo fundão (UFRJ), pricipalmente no nosso evento, o Rock no Mangue.',
            status: 'Projeto Atualmente Inativo.',
            statusBool: false,
        },
        {
            title: 'Banda Bettersweet',
            image: bettersweet,
            description: <React.Fragment>Pocket-Band da qual eu fiz parte durante o ano de 2013 como
                percussionista (cajon e panderola) e vocal de apoio. <br/>
                Tocavamos classicos da música pop como The Police e Adelle em shows às sextas-feiras
                principalmente em um quiosque no posto 7 da praia da Barra da Tijuca - Rio de Janeiro</React.Fragment>,
            status: 'Não faço mais parte da banda desde 2013.',
            statusBool: false,
        },
    ],
};