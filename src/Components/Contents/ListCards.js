/** @jsxImportSource @emotion/react */
//import { css } from "@emotion/react";
import styled from "@emotion/styled";
import Card from "./CategoryCard";

const StyledDiv = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
`

function ListCards({data}){
  return(
    <StyledDiv>
      {data.map((categorie)=>{
          return(
            <Card 
              key={categorie.id}
              name={categorie.name}
              transactions={categorie.transactions.length}
              items={categorie.transactions}
            />
          );
        })
      }
    </StyledDiv>
  );
}

export default ListCards;