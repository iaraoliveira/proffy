import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';
import Select from '../../components/Select';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Select 
                        name="subject" 
                        label="Matéria" 
                        options = {[
                            { value: 'Artes', label: 'Artes'}
                        ]}
                    ></Select>
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
                    <Input name="time" label="Horário" ></Input>
                </form>
            </PageHeader>

            <main>
                <TeacherItem></TeacherItem>
            </main>

        </div>
    );
}

export default TeacherList;