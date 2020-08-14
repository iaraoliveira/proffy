import React, { useState, FormEvent } from 'react';

import './styles.css';
import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

function TeacherForm() {

    const history = useHistory();

    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems, 
            { week_day: 0, from: '', to: '' }
        ]);
    }

    function setScheduleItemValue( position: number, field: string, value: string ) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if (index === position) {
                return { ...scheduleItem, [field]: value }
            }
            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e: FormEvent) {
        e.preventDefault();

        api.post("/classes",{
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost: Number(cost),
            schedule: scheduleItems
        }).then(() => {
            
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        }).catch(() => {
            
            alert('Erro no cadastro.');
        });
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse foormulário de inscrição"
            >
            </PageHeader>
            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>
                        <Input name="name" label="Nome completo" value={name} onChange={ e => setName(e.target.value)} ></Input>
                        <Input name="avatar" label="Avatar" value={avatar} onChange={ e => setAvatar(e.target.value)}></Input>
                        <Input name="whatsapp" label="Whatsapp" value={whatsapp} onChange={ e => setWhatsapp(e.target.value)}></Input>
                        <Textarea name="bio" label="Biografia" value={bio} onChange={ e => setBio(e.target.value)}></Textarea>
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>
                        <Select 
                            name="subject" 
                            label="Matéria" 
                            value={subject}
                            onChange={ e => setSubject(e.target.value) }
                            options = {[
                                { value: 'Artes', label: 'Artes'}
                            ]}
                        ></Select>
                        <Input name="cost" label="Custo da sua aula por hora" value={cost} onChange={ e => setCost(e.target.value)} ></Input>
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                            <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                            </button>
                        </legend>

                        {scheduleItems.map((scheduleItem, index) => {
                            return (
                                <div key="scheduleItem.week_day" className="schedule-item">
                                    <Select 
                                        name="week-day" 
                                        label="Dia da semana" 
                                        value={scheduleItem.week_day}
                                        onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value)}
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
                                    <Input 
                                        name="from" 
                                        label="Das" 
                                        type="time"
                                        value={scheduleItem.from}
                                        onChange={ e => setScheduleItemValue(index, 'from', e.target.value)}
                                    />
                                    <Input 
                                        name="to" 
                                        label="Até" 
                                        type="time"
                                        value={scheduleItem.to}
                                        onChange={ e => setScheduleItemValue(index, 'to', e.target.value)}
                                    />
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
                        <button type="submit">
                            Salvar cadastro
                        </button>
                    </footer>
                </form>
            </main>
        </div>
    );
}

export default TeacherForm;