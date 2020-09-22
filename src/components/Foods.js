import React from "react";
import { Food } from "./Food";

export const Foods = (props) => {
  return (
    <ul>
      {props.foods.map((food, index) => {
        return <Food index={index} food={food} />;
      })}
    </ul>
  );
};
