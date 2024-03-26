import React from 'react';

const CalendarContext = React.createContext({});

export const CalendarProvider = ({ children }) => {
  // Define your date formatting configurations here
  const formats = {
    dateFormat: 'dd',
    dayFormat: (date, culture, localizer) => localizer.format(date, 'ddd MM/DD', culture),
    dayHeaderFormat: (date, culture, localizer) => localizer.format(date, 'ddd', culture),
    dayRangeHeaderFormat: ({ start, end }, culture, localizer) =>
      localizer.format(start, 'MMM dd', culture) + ' - ' + localizer.format(end, 'MMM dd', culture),
    monthHeaderFormat: (date, culture, localizer) => localizer.format(date, 'MMMM yyyy', culture),
    timeGutterFormat: 'h:mm tt',
    eventTimeRangeFormat: ({ start, end }, culture, localizer) =>
      localizer.format(start, 'h:mm tt', culture) + ' - ' + localizer.format(end, 'h:mm tt', culture),
  };

  return (
    <CalendarContext.Provider value={{ formats }}>
      {children}
    </CalendarContext.Provider>
  );
};

export const useCalendarContext = () => {
  return React.useContext(CalendarContext);
};