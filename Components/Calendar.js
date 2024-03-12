import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Calendar = ({ selectedDate, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = (month, year) => {
    return new Date(year, month, 1).getDay();
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentMonth, currentYear);
    const startDay = startDayOfMonth(currentMonth, currentYear);
    const rows = Math.ceil((totalDays + startDay) / 7);

    let day = 1;
    let calendar = [];

    for (let i = 0; i < rows; i++) {
      let cells = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < startDay) {
          cells.push(<View key={j} style={styles.emptyCell}></View>);
        } else if (day > totalDays) {
          break;
        } else {
          cells.push(
            <TouchableOpacity
              key={day}
              style={[
                styles.cell,
                selectedDate.getDate() === day && selectedDate.getMonth() === currentMonth && selectedDate.getFullYear() === currentYear
                  ? styles.selectedCell
                  : null,
              ]}
              onPress={() => onSelectDate(new Date(currentYear, currentMonth, day))}
            >
              <Text style={styles.day}>{day}</Text>
            </TouchableOpacity>
          );
          day++;
        }
      }
      calendar.push(<View key={i} style={styles.row}>{cells}</View>);
    }
    return calendar;
  };

  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={prevMonth}>
          <AntDesign name="caretleft" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.monthYear}>{monthNames[currentMonth]} {currentYear}</Text>
        <TouchableOpacity onPress={nextMonth}>
          <AntDesign name="caretright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.weekDays}>
        {weeks.map((day, index) => (
          <Text key={index} style={styles.weekDay}>{day}</Text>
        ))}
      </View>
      {renderCalendar()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthYear: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  weekDays: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  weekDay: {
    textAlign: 'center',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  emptyCell: {
    flex: 1,
    padding: 10,
  },
  day: {
    fontSize: 16,
  },
  selectedCell: {
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
  },
});

export default Calendar;
