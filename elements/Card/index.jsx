import React from "react";
import propTypes from "prop-types";

export default function Card(props) {
  const { className } = props;

  // store data for edit date format
  const date = props.data.date;
  // date format
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return (
    <div>
      <div
        className={[
          `block w-96 h-auto p-6 bg-white border border-gray-200 rounded-lg shadow`,
          className,
        ].join(" ")}
      >
        <h5 className="mb-1 text-3xl font-bold tracking-tight font-bad-script text-gray-900 dark:text-white">
          {props.data.name}
        </h5>
        <p className="text-sm mb-5 font-kurale">
          {new Date(date).toLocaleDateString(["ban", "id"], options)},{" "}
          {new Date(date).toLocaleTimeString(["ban", "id"], {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="font-normal text-gray-700 text-xl font-kurale dark:text-gray-400">
          {props.data.wish}
        </p>
      </div>
    </div>
  );
}

Card.propTypes = {
  className: propTypes.string,
  data: propTypes.object.isRequired,
};
