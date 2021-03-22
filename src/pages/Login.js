/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled'
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import LoginForm from "../features/session/loginform";

const StyledH1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 30px;
  line-height: 40px;
  text-align: center;
  margin: 0px;
  color: #4F4F4F;
`;

const StyledH5 = styled.h5`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #4F4F4F;
  margin: 0px;
`

function Login() {
  const token = useSelector((state) => state.session.token);

  if (token) {
    sessionStorage.setItem("token", token);
    return <Redirect to="/home" />;
  }

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        height: calc(100% - 120px);
        padding: 60px 50px 40px;
        gap: 32px;
      `}
    >
      <StyledH1>Welcome to Expensable</StyledH1>
      <StyledH5>Please login to start using the app</StyledH5>
      <LoginForm id="login-form" />
        <button type="submit" form="login-form">
          Login
        </button>
    </div>
  );
}

export default Login;