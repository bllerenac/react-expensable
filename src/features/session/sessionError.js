import { useSelector } from "react-redux";
import styled from '@emotion/styled'

const StyledP = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #4F4F4F;
  margin: 0px;
`;

export default function SessionError() {
  const error = useSelector((state) => state.session.error);
  return <StyledP className="error">{error}</StyledP>;
}