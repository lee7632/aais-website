import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './ReactCalendar.css';
import moment from 'moment';

BigCalendar.momentLocalizer(moment);
const aaisEvents = [
    {
      allDay: false,
      startDate: new Date('September 02, 2018 13:00:00'),
      endDate: new Date('September 02, 2018 17:00:00'),
      title: 'MSC Open House',
    },
    {
        allDay: false,
        startDate: new Date('September 07, 2018 17:00:00'),
        endDate: new Date('September 07, 2018 18:00:00'),
        title: 'Meeting HRBB 113',
    },
    {
        allDay: false,
        startDate: new Date('September 20, 2018 18:00:00'),
        endDate: new Date('September 20, 2018 19:00:00'),
        title: 'PwC Talk HRBB 113',
    },
    {
        allDay: false,
        startDate: new Date('September 28, 2018 17:00:00'),
        endDate: new Date('September 28, 2018 18:00:00'),
        title: 'Meeting Cancelled',
    },
    {
        allDay: false,
        startDate: new Date('October 19, 2018 17:00:00'),
        endDate: new Date('October 19, 2018 18:00:00'),
        title: 'Voice Recognition Workshop',
    },
    {
        allDay: false,
        startDate: new Date('November 02, 2018 17:00:00'),
        endDate: new Date('November 02, 2018 18:00:00'),
        title: 'AlphaZero Presentation',
    },
    {
        allDay: false,
        startDate: new Date('November 16, 2018 17:00:00'),
        endDate: new Date('November 16, 2018 18:00:00'),
        title: 'Movie Night (A.I. Artificial Intelligence directed by Stephen Spielberg)',
    },
    {
        allDay: false,
        startDate: new Date('November 30, 2018 17:00:00'),
        endDate: new Date('November 30, 2018 18:00:00'),
        title: 'Comp Vision Pres.',
    }

  ];
const MyCalendar = props => (
    <div className="rbc-calendar">
    <BigCalendar
      events={aaisEvents}
      startAccessor='startDate'
      endAccessor='endDate'
      defaultDate={moment().toDate()}
    />
    </div>
);

export default MyCalendar;
