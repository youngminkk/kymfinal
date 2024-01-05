import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

export default function StaticDualCalendars() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // 시간을 0으로 설정합니다.
  const [selectedDate, setSelectedDate] = useState(null);
  const [activePicker, setActivePicker] = useState(null); // 'null'이 아닌 null로 변경

  // 오늘부터 13일 후까지의 날짜를 설정합니다.
  const twoWeeksLater = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 14);
  twoWeeksLater.setHours(0, 0, 0, 0); // 시간을 0으로 설정합니다.

  const handleDateChange = (newDate) => {
    newDate.setHours(0, 0, 0, 0); // 시간을 0으로 설정합니다.
    // 선택된 날짜가 오늘부터 13일 이내인지 확인합니다.
    if (newDate >= today && newDate <= twoWeeksLater) {
      setSelectedDate(newDate);
      setActivePicker(newDate.getMonth() === today.getMonth() ? 'left' : 'right');
      console.log(`Selected date: ${newDate.toDateString()}`);
    } else {
      console.log('Selected date is out of range. Please select a date within the next two weeks.');
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          {/* 왼쪽 달력: 현재 월 */}
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={activePicker === 'left' ? selectedDate : null}
            onChange={handleDateChange}
            minDate={today}
            maxDate={twoWeeksLater}
            onMonthChange={() => setActivePicker('left')}
          />
        </Grid>
        <Grid item xs={6}>
          {/* 오른쪽 달력: 다음 월 */}
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="day"
            value={activePicker === 'right' ? selectedDate : null}
            onChange={handleDateChange}
            minDate={new Date(today.getFullYear(), today.getMonth() + 1, 1)}
            maxDate={new Date(today.getFullYear(), today.getMonth() + 1, twoWeeksLater.getDate()-1)}
            onMonthChange={() => setActivePicker('right')}
          />
        </Grid>
      </Grid>
    </LocalizationProvider>
  );
}
