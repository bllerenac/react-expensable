/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect} from "react-router";
import { Link } from "react-router-dom";
import { fetchProducts } from "../features/products/productsSlice";
import { killToken } from "../features/session/sessionSlice";
import Card from "../Components/Contents/CategoryCard"
import styled from "@emotion/styled";

const ListCards = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
  padding: 19px
`

export default function Home() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.session.token);
  const products = useSelector((state) => state.products.items);
  console.log(products)
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  if (status === "idle") {
    dispatch(fetchProducts(token));
  }

  if (!token) {
    return <Redirect to="/" />;
  }

  return (
    <div
      css={css`
        overflow: auto;
      `}
    >
      <h1>Products</h1>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && (
        <p>
          {error}{" "}
          <Link to="/login" onClick={(e) => dispatch(killToken())}>
            Try to login again
          </Link>
        </p>
      )}
      {status === "succeeded" && (
        <ListCards>
          {products.map((product)=>{
              return(
                <Card 
                  key={product.id}
                  name={product.name}
                  transactions={product.transactions.length}
                  items={product.transactions}
                />
              );
            })
          }
        </ListCards>
      )}
    </div>
  );
}