import React, { useState, useEffect } from 'react';

function Countdown() {
  // Set the release date of Armored Core 6
  const releaseDate = new Date('2023-08-25');
  
  // Use state to keep track of the remaining time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Use useEffect to update the remaining time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date().getTime();
      const distance = releaseDate - now;

      // Calculate the remaining days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Update the state with the remaining time
      setTimeLeft({ days, hours, minutes, seconds });

      // Clear the interval when the release date is reached
      if (distance < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  // Render the remaining time
  return (
    <div>
      <p>Armored Core 6 will be released in:</p>
      <p>{timeLeft.days} days, {timeLeft.hours} hours, {timeLeft.minutes} minutes, {timeLeft.seconds} seconds</p>
    </div>
  );
}

export default Countdown;

