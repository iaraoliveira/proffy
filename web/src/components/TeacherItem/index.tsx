import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css';

function TeacherItem () {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars0.githubusercontent.com/u/30235250?s=460&u=6309c5d455aecbe07da1b068074c3ab9b97bf4ff&v=4" alt="Iara Oliveira"/>
                <div>
                    <strong>Iara Oliveira</strong>
                    <span>Artes</span>
                </div>
            </header>

            <p>
                Expressividade artística não intencional. Arteira de nascença.
                <br/><br/>
                Apaixonada por ver coisas saindo do papel e tranformar em visível aquilo que antes não existia.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 70,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;