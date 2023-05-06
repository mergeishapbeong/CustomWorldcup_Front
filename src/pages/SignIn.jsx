import React from "react";
import styled from "styled-components";

function SignIn() {
  return (
    <Container>
      <form>
        <div>
          <div style={{ width: "150px", margin: "auto" }}>
            <SignInInput></SignInInput>
            <SignInInput></SignInInput>
          </div>
        </div>
      </form>
    </Container>
  );
}

export default SignIn;

const Container = styled.div`
  width: 400px;
  margin: auto;
`;

const SignInInput = styled.input`
  width: 100%;
  box-sizing: border-box;
`;
