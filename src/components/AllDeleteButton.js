import React from "react";
import Button from "@material-ui/core/Button";

export const AllDeleteButton = (props) => {
  return (
    <div>
      <Button variant="contained" color="secondary" onClick={props.allDelete}>
        全ての食べ物を削除する
      </Button>
    </div>
  );
};
