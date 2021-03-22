import styled from '@emotion/styled'
import {StyledH5, ContentS, ContentXL} from "../UI/Typografy"

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px 0px;
  & > p{
    margin: 0px;
  }
`
function TotalAmount(items){
  let total = 0;
  if(items){
    items.forEach(item => {
      total = total + item.amount;
    });
  }
  return total;
}

function Card ({name, transactions, items, onClick}) {
  return(
    <StyledCard onClick={onClick}>
      <StyledH5>{name}</StyledH5>
      <ContentS>{transactions} transactions</ContentS>
      <ContentXL>${TotalAmount(items)}</ContentXL>
    </StyledCard>
  );
}

export default Card;