/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from 'react';
import { useDispatch, useSelector} from "react-redux";
import { Redirect} from "react-router";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/products/productsSlice";
import { killToken } from "../features/session/sessionSlice";
import {StyledH1} from "../Components/UI/Typografy";
import {RadioButton, StyledButton2} from "../Components/UI/Button";
import ListCards from "../Components/Contents/ListCards"

const Filter = styled.form`
  display:flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;


export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const products = useSelector((state) => state.products.items);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const [filterCategories, setFilterCategories] = useState(null)

  const handleChange = (e) => {
    const nameRegex = new RegExp(e.target.value, "i");
    const filtered = products.filter((product) => nameRegex.test(product.transaction_type));
    console.log(filtered);
    setFilterCategories(filtered);
  };

  if (status === "idle") {
    dispatch(fetchProducts(token));
  }

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <div
      css={css`
        display:flex;
        flex-direction: column;
        overflow: auto;
        padding: 32px 0px;
        gap: 32px;
      `}
    >
      <StyledH1>Expensable</StyledH1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && (
        <p>
          {error}{" "}
          <Link to="/" onClick={(e) => dispatch(killToken())}>
            Try to login again
          </Link>
        </p>
      )}
      <Filter onChange={handleChange}>
        <RadioButton label="Expenses" name="type" value="expense"status/>
        <RadioButton label="Income" name="type" value="income"/>
      </Filter>
      {status === "succeeded" && (
        <ListCards data={filterCategories || products}/>
      )}
        <StyledButton2 onClick={(e) => dispatch(killToken())}>
          LogOut
        </StyledButton2>
    </div>
  );
}