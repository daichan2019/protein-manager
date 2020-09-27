import React from "react";

export const Progress = (props) => {
  return (
    <>
      <label htmlFor="progressbar">プロテインの摂取進捗状況</label>
      <progress id="progressbar" max={props.amount} value={props.totalProtein}>
        10%
      </progress>
      <p>
        {props.totalProtein}/{props.amount}
      </p>
    </>
  );
};
