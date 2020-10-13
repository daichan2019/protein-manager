import React from "react";
import styled from "styled-components";

export const Progress = (props) => {
  return (
    <Wrapper>
      <Title>
        <label htmlFor="progressbar">プロテインの摂取進捗状況</label>
      </Title>
      <Grid>
        <progress
          id="progressbar"
          max={props.amount}
          value={props.totalProtein}
        ></progress>
        <p>
          {props.totalProtein}/{props.amount}
        </p>
      </Grid>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 60px;
`;

const Title = styled.h2`
  margin: 0 0 10px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  progress[value] {
    width: 90%;
    -webkit-appearance: none;
    appearance: none;

    ::-webkit-progress-bar {
      height: 20px;
      border-radius: 2000px;
      background-color: #eff0f3;
      box-sizing: border-box;
    }

    ::-webkit-progress-value {
      height: 20px;
      border-radius: 2000px;
      background-color: #ff8e3c;
      box-sizing: border-box;
    }
  }
`;
