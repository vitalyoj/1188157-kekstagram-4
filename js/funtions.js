function isMeetingWithinWorkingHours(startOfWorkday, endOfWorkday, startOfMeeting, meetingDuration) {
  // Преобразование времени в минуты для удобства сравнения
  function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const startOfWorkdayMinutes = timeToMinutes(startOfWorkday);
  const endOfWorkdayMinutes = timeToMinutes(endOfWorkday);
  const startOfMeetingMinutes = timeToMinutes(startOfMeeting);

  // Рассчитываем конец встречи в минутах
  const endOfMeetingMinutes = startOfMeetingMinutes + meetingDuration;

  // Проверяем, что встреча начинается после начала рабочего дня
  // и заканчивается до конца рабочего дня
  return (
    startOfMeetingMinutes >= startOfWorkdayMinutes &&
    endOfMeetingMinutes <= endOfWorkdayMinutes
  );
}
isMeetingWithinWorkingHours('08:00', '17:30', '14:00', 90); // true
isMeetingWithinWorkingHours('8:0', '10:0', '8:0', 120);     // true
isMeetingWithinWorkingHours('08:00', '14:30', '14:00', 90); // false
isMeetingWithinWorkingHours('14:00', '17:30', '08:0', 90);  // false
isMeetingWithinWorkingHours('8:00', '17:30', '08:00', 900);
