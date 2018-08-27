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