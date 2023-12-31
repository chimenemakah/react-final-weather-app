import React from "react";

export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tueday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = (props.date.getHours() < 10 ? "0" : "") + props.date.getHours();
  let minutes =
    (props.date.getMinutes() < 10 ? "0" : "") + props.date.getMinutes();
  return (
    <div>
      {day} {hours}:{minutes}
    </div>
  );
}
