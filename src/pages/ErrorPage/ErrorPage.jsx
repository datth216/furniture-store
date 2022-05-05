import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export const ErrorPage = () => {
  return (
    <Wrapper className='page-100'>
      <section>
        <h1>404</h1>
        <h4>The page you are looking for may have been moved or removed. </h4>
        <Link to='/' className='btn'>
          Go Back Home
        </Link>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  background: var(--clr-primary-10);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  h1 {
    font-size: 10rem;
    opacity: 0.5;
  }
  h4 {
    text-transform: none;
    margin-bottom: 1rem;
    font-weight: 400;
  }
`;

export default ErrorPage;
