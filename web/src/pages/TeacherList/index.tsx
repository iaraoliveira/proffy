import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

import './styles.css';

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" ></Input>
                    <Input name="week-day" label="Dia da semana" ></Input>
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