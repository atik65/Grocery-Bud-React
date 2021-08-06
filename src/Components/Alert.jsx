import React from "react";
import { useEffect } from "react";

const Alert = ({ alert, alertShow, list }) => {
  const { title, color } = alert;

  useEffect(() => {
    const timeout = setTimeout(() => {
      alertShow();
    }, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, [list]);

  return (
    <>
      <div class={`alertStyle alert-${color}`}>
        <p>{title}</p>
      </div>
    </>
  );
};

export default Alert;
