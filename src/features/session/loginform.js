import styled from '@emotion/styled'
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchLogin } from "../../features/session/sessionSlice";
import SessionError from "./sessionError";
import {Input} from "../../Components/UI/input"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export default function LoginForm({ id }) {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ email, password }));
  };
  const onChangeEmail = (e) =>{
    setEmail(e.target.value)
  }
  const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }
  return (
    <StyledForm onSubmit={handleSubmit} id={id}>
      <SessionError />
        <Input
          value={email}
          placeholder="email"
          label="Email Address"
          type="email"
          onChange={onChangeEmail}
        />
        <Input
          value={password}
          placeholder="password"
          label="Password"
          type="password"
          onChange={onChangePassword}
        />
    </StyledForm>
  );
}