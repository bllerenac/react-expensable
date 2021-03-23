/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from '@emotion/styled'
import {StyledH5, ContentS, ContentXL} from "../UI/Typografy"
import { GrTrash } from "react-icons/gr";


const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 150px;
  background: #FFFFFF;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 16px 0px;
  gap: 20px;
`
const IconDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #2F80ED;
  border-radius: 50%;
`;

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
      <div>
        <StyledH5>{name}</StyledH5>
        <ContentS>{transactions} transactions</ContentS>
      </div>
      <ContentXL>${TotalAmount(items)}</ContentXL>
      <IconDiv>
        <GrTrash css={css`
            width: 20px;
            height: 20px;
            path{
              stroke: #2F80ED;
            }
          `}/>
      </IconDiv>
    </StyledCard>
  );
}

export default Card;