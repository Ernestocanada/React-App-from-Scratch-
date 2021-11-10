import React from "react";
import styled from "styled-components";

function Testing() {
  return (
    <TestingStyled>
      <div className="container">
        <h1>Create React App from Scratch like a Pro</h1>
      </div>
    </TestingStyled>
  );
}

export default Testing;

const TestingStyled = styled.div`
  display: flex;
  justify-content: center;
  .container {
    background-color: aqua;
    display: flex;
    justify-content: center;

    width: 50vw;

    &:hover {
      background-color: bisque;
    }
  }
`;
