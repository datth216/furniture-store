import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import { useCartContext } from '../../context/cart_context';
import AmountButtons from '../AmountButtons/AmountButtons.jsx';

const AddToCart = ({ singleProduct }) => {
  const { addToCart } = useCartContext();
  const { id, colors, stock } = singleProduct;
  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  function increaseAmount() {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount + 1;
      if (tempAmount > stock) tempAmount = stock;
      return tempAmount;
    });
  }

  function decreaseAmount() {
    setAmount((oldAmount) => {
      let tempAmount = oldAmount - 1;
      if (tempAmount < 1) tempAmount = 1;
      return tempAmount;
    });
  }

  return (
    <Wrapper>
      <div className="colors">
        <span>colors: </span>
        <div>
          {colors.map((item, index) => {
            return (
              <button
                key={index}
                className={`${item === color ? 'color-btn active' : 'color-btn '}`}
                style={{ background: item }}
                onClick={() => setColor(colors[index])}
              >
                {item === color && <FaCheck />}
              </button>
            );
          })}
        </div>
      </div>
      <div className="btn-container">
        <AmountButtons
          increaseAmount={increaseAmount}
          decreaseAmount={decreaseAmount}
          amount={amount}
        />
        <Link
          to="/cart"
          className="btn"
          onClick={() => addToCart(id, color, amount, singleProduct)}
        >
          add to cart
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  .colors {
    display: grid;
    grid-template-columns: 125px 1fr;
    align-items: center;
    margin-bottom: 1rem;
    span {
      text-transform: capitalize;
      font-weight: 700;
    }
    div {
      display: flex;
    }
  }
  .color-btn {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.75rem;
      color: var(--clr-white);
    }
  }
  .active {
    opacity: 1;
  }
  .btn-container {
    margin-top: 2rem;
  }

  .btn {
    margin-top: 1rem;
    width: 140px;
  }
`;
export default AddToCart;
