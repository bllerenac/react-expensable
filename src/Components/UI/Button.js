/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";

const StyledDiv = styled.div`
  display: flex;
`;

const StyledLabel = styled.label`
font-family: 'Inter', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 24px;
text-align: center;
color: #BDBDBD;
border: none;
padding-bottom: 6px;
background-color: transparent;
background-image: linear-gradient(#2F80ED, #2F80ED);
background-position: 0% 100%;
background-repeat: no-repeat;
background-size: 0% 2px;
transition: background-size .3s;
outline: none;
&:hover{
  color: #4F4F4F;
  background-size: 100% 2px;
}
`;

const StyledFilter = styled.input`
display: none;
&:checked + label{
  color: #4F4F4F;
  background-size: 100% 2px;
}
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding: 8px 16px;
  margin: auto;
  background: #2F80ED;
  border-radius: 8px;
  border: none;
  color: #FFFFFF;
  outline: none;
  &:hover{
    background: #2D9CDB;
  }
`;

const StyledButton2 = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  padding: 8px 16px;
  margin: auto;
  background: #FFFFFF;
  border-radius: 8px;
  border: 1px solid #2F80ED;
  color: #2F80ED;
  outline: none;
  &:hover{
    background: rgba(47, 128, 237, 0.1);
  }
`;


function RadioButton({label, name, status}){
  return(
    <StyledDiv>
      <StyledFilter     name={name} 
                        type="radio" 
                        id={label}
                        value={label} 
                        defaultChecked={status ? true:false} 
                        />
      <StyledLabel htmlFor={label} >{label}</StyledLabel>
    </StyledDiv>
  );
}

export {RadioButton, StyledButton, StyledButton2};