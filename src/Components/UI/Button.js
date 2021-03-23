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
  background-size: 100% 2px;
}
`;

const StyledFilter = styled.input`
display: none;
&:checked + label{
  color: #4F4F4F;
  background-size: 100% 2px;
}
`
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

export {RadioButton};