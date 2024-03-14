import "./Greeting.css";
import React from "react";

interface ReturnDate {
  time: string;
  date: string;
  wish: string;
}

export const useDate = (): ReturnDate => {
  const locale = "en";
  const today = new Date();

  const day = today.toLocaleDateString(locale, { weekday: "long" });
  const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, {
    month: "long",
  })}\n\n`;

  const hour = today.getHours();
  const wish = `Good ${
    (hour < 12 && "Morning") || (hour < 17 && "Afternoon") || "Evening"
  }, `;

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return {
    date,
    time,
    wish,
  };
};

function Greeting() {
  const { date, time, wish } = useDate();
  return (
    <div className="Greetings">
      <div id="time">
        {time}
      </div>
    </div>
  );
}

export default Greeting;
