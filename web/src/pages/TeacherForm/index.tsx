import React, { useState } from 'react';

import './styles.css';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

function TeacherForm() {

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);


    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from: '', to: '' }
        ]);
    }

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

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div key="scheduleItem.week_day" className="schedule-item">
                                <Select 
                                    name="week-day" 
                                    label="Dia da semana" 
                                    options = {[
                                        { value: '0', label: 'Domingo'},
                                        { value: '1', label: 'Segunda'},
                                        { value: '2', label: 'Terça'},
                                        { value: '3', label: 'Quarta'},
                                        { value: '4', label: 'Quinta'},
                                        { value: '5', label: 'Sexta'},
                                        { value: '6', label: 'Sabado'},
                                    ]}
                                ></Select>
                                <Input name="from" label="Das" type="time" />
                                <Input name="to" label="Até" type="time" />
                            </div>
                        );
                    })}

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