import React from "react";

export const Food = (props) => {
  return (
    <li key={props.index}>{`${props.food.name} ${props.food.protein}`}</li>
  );
};
