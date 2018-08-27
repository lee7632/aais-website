import React, { Component } from 'react';
import MyCalendar from '../components/ReactCalendar.js';
import './Calendar.css';

class Calendar extends Component {
    render() {
      return (
        <div className="Calendar">
            <h1 className="Calendar-welcome">Upcoming Events</h1>
            <MyCalendar />
        </div>
      );
    }
  }
  
  export default Calendar;