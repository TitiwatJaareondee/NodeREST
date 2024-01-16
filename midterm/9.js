function digitalClock(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    const formattedHours = hours.toString().padStart(2, '0');
    const formattedMinutes = minutes.toString().padStart(2, '0');
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');

    const digitalClockFormat = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    return digitalClockFormat;
  }
  
  console.log(digitalClock(5025));
  console.log(digitalClock(61201));
  console.log(digitalClock(87000));
  
