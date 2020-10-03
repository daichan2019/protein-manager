import React from "react";
import styled from "styled-components";

export const Progress = (props) => {
  return (
    <Wrapper>
      <Title>
        <label htmlFor="progressbar">プロテインの摂取進捗状況</label>
      </Title>
      <Grid>
        <ProgressWrap>
          <StyledProgress
            id="progressbar"
            max={props.amount}
            value={props.totalProtein}
          >
            10%
          </StyledProgress>
        </ProgressWrap>
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
`;

const ProgressWrap = styled.div`
  height: 30px;
  width: 90%;
  border-radius: 2000px;
  border: 3px solid #2a2a2a;
  background-color: #ff8e3c;
  position: relative;
  box-sizing: border-box;
  margin: 0;
`;

const StyledProgress = styled.progress`
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  margin: 0;
`;
