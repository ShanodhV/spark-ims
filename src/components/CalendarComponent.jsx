import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import IconButton from '@mui/material/IconButton';
import { Tooltip } from '@mui/material';
import { AddCircleOutline, ArrowBack, ArrowForward, HolidayVillage } from '@mui/icons-material';

import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);

  // Function to handle date selection
  const handleDateSelect = (date) => {
    // Implement your logic for handling date selection here
    console.log('Selected date:', date);
  };

  const CustomToolbar = ({ label, onNavigate }) => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <IconButton onClick={() => onNavigate('PREV')} aria-label="Previous">
        <Tooltip title="Previous Month">
          <ArrowBack />
        </Tooltip>
      </IconButton>
      <div>{label}</div>
      <IconButton onClick={() => onNavigate('NEXT')} aria-label="Next">
        <Tooltip title="Next Month">
          <ArrowForward/>
        </Tooltip>
      </IconButton>
    </div>
  );

  const eventStyleGetter = () => ({
    style: {
      backgroundColor: '#3174ad',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
      border: '0px',
      display: 'block',
    },
  });

  const CustomDateCell = ({ value }) => {
    return (
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div>{moment(value).format('D')}</div>
        
        <div style={{ position: 'absolute', bottom: '5px', left: '5px' }}>
          <Tooltip title="Add Holiday">
            <IconButton>
              <HolidayVillage />
            </IconButton>
          </Tooltip>
        </div>
        <div style={{ position: 'absolute', bottom: '5px', right: '5px' }}>
          <Tooltip title="Add Record">
            <IconButton>
              <AddCircleOutline />
            </IconButton>
          </Tooltip>
        </div>
      </div>
    );
  };
  
  return (
    <div>
      <Calendar
        events={events}
        onSelectEvent={handleDateSelect}
        onSelectSlot={(slotInfo) => handleDateSelect(slotInfo.start)}
        selectable
        localizer={localizer}
        components={{
            toolbar: CustomToolbar,
            dateCellWrapper: CustomDateCell, // Use CustomDateCell for date cells
        }}
        eventPropGetter={eventStyleGetter}
        formats={{
            monthHeaderFormat: 'MMMM YYYY',
        }}
        onView={() => {}}
        view={'month'}
        style={{ // Add inline CSS styles here
          height: '500px', // Example height
          border: '1px solid #ccc', // Example border
        }}
      />
    </div>
  );
};

export default CalendarComponent;
