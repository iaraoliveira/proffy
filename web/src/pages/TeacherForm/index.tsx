import React from 'react';

import './styles.css';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {
    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse foormulário de inscrição"
            >
            </PageHeader>
            <main>
                <fieldset>
                    <legend>Seus dados</legend>
                    <Input name="name" label="Nome completo" ></Input>
                    <Input name="avatar" label="Avatar" ></Input>
                    <Input name="whatsapp" label="Whatsapp" ></Input>
                    <Textarea name="bio" label="Biografia" ></Textarea>
                </fieldset>

                <fieldset>
                    <legend>Sobre a aula</legend>
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options = {[
                            { value: 'Artes', label: 'Artes'}
                        ]}
                    ></Select>
                    <Input name="cost" label="Custo da sua aula por hora" ></Input>
                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>
            </main>
        </div>
    );
}

export default TeacherForm;