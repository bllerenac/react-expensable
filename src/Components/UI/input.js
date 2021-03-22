import styled from '@emotion/styled'

const StyledLabel = styled.label`
  font-family:'Roboto', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  color: #4F4F4F;
  display: flex;
  flex-direction: column;
  gap:4px;
`

const StyledInput = styled.input`
  background: #FFFFFF;
  border: 1px solid #2F80ED;
  border-radius: 8px;
  padding: 8px 16px;
  outline: none;
`

const StyledTextArea = styled.textarea`
  background: #FFFFFF;
  border: 1px solid #2F80ED;
  border-radius: 8px;
  padding: 8px 16px;
`
function Input({ value, placeholder, label, type, onChange}){
  return(
    <StyledLabel>
      {label}
      <StyledInput value={value} placeholder={placeholder} type={type} onChange={onChange}/>
    </StyledLabel>
  );
}

function TextArea({ value, placeholder, label, onChange}){
  return(
    <StyledLabel>
      {label}
      <StyledTextArea value={value} placeholder={placeholder} onChange={onChange}/>
    </StyledLabel>
  );
}

export {Input, TextArea}