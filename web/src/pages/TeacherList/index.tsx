import React, { useState, FormEvent } from 'react';
import { useMediaQuery } from 'react-responsive';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import searchIcon from '../../assets/images/icons/search.svg';

import api from '../../services/api';

import './styles.css';

function TeacherList() {
  const options = [
    {
      value: 'Artes',
      label: 'Artes',
    },
    {
      value: 'Ciências',
      label: 'Ciências',
    },
    {
      value: 'Biologia',
      label: 'Biologia',
    },
    {
      value: 'Física',
      label: 'Física',
    },
    {
      value: 'Matemática',
      label: 'Matemática',
    },
    {
      value: 'Português',
      label: 'Português',
    },
    {
      value: 'Geografia',
      label: 'Geografia',
    },
    {
      value: 'História',
      label: 'História',
    },
    {
      value: 'Quimíca',
      label: 'Quimíca',
    },
    {
      value: 'Sociologia',
      label: 'Sociologia',
    },
    {
      value: 'Filosofia',
      label: 'Filosofia',
    },
    {
      value: 'Inglês',
      label: 'Inglês',
    },
  ];

  const optionsWeek = [
    {
      value: '0',
      label: 'Domingo',
    },
    {
      value: '1',
      label: 'Segunda-feira',
    },
    {
      value: '2',
      label: 'Terça-feira',
    },
    {
      value: '3',
      label: 'Quarta-feira',
    },
    {
      value: '4',
      label: 'Quinta-feira',
    },
    {
      value: '5',
      label: 'Sexta-feira',
    },
    {
      value: '6',
      label: 'Sábado',
    },
  ];

  const [teachers, setTeachers] = useState([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekday] = useState('');
  const [time, setTime] = useState('');

  const isMobile = useMediaQuery({
    query: '(max-width: 699px)'
  });

  async function searchTeachers(event: FormEvent) {
    event.preventDefault();

    const response = await api.get('/classes', {
       params: {
         subject,
         week_day,
         time,
       }
    });
    
    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form
          id="search-teachers"
          onSubmit={searchTeachers}
        >
        <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(event) => { setSubject(event.target.value) }}
            options={options}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={week_day}
            onChange={(event) => { setWeekday(event.target.value) }}
            options={optionsWeek}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(event) => { setTime(event.target.value) }}
          />

          <button type="submit">
            { isMobile ? 'Buscar' : <img src={searchIcon} alt="Buscar" /> }
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
