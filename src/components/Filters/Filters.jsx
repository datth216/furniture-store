import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../../context/filter_context";
import { getUniqueValues, formatPrice } from "../../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filter: {
      text,
      category,
      company,
      color,
      minPrice,
      price,
      maxPrice,
      shipping,
    },
    updateFilter,
    clearFilter,
    allProducts,
  } = useFilterContext();

  const categoryList = getUniqueValues(allProducts, "category");
  const companyList = getUniqueValues(allProducts, "company");
  const colorList = getUniqueValues(allProducts, "colors");

  return (
    <Wrapper>
      <div className='content'>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='form-control'>
            <input
              type='text'
              name='text'
              placeholder='search'
              className='search-input'
              value={text}
              onChange={updateFilter}
            />
          </div>
          <div className='form-control'>
            <h5>category</h5>
            <div>
              {categoryList.map((item, index) => {
                return (
                  <button
                    key={index}
                    type='button'
                    name='category'
                    onClick={updateFilter}
                    className={
                      item.toLowerCase() === category ? "active" : null
                    }
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>company</h5>
            <select name='company' className='company' onChange={updateFilter}>
              {companyList.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
          <div className='form-control'>
            <h5>colors</h5>
            <div className='colors'>
              {colorList.map((item, index) => {
                if (item === "all") {
                  return (
                    <button
                      key={index}
                      name='color'
                      className={color === "all" ? "all-btn active" : "all-btn"}
                      data-color='all'
                      onClick={updateFilter}
                      value={item}
                    >
                      All
                    </button>
                  );
                }
                return (
                  <button
                    key={index}
                    name='color'
                    className={
                      color === item ? "color-btn active" : "color-btn"
                    }
                    data-color={item}
                    style={{ background: item }}
                    onClick={updateFilter}
                    value={item}
                  >
                    {color === item ? <FaCheck /> : null}
                  </button>
                );
              })}
            </div>
          </div>
          <div className='form-control'>
            <h5>Price</h5>
            <p className='price'>{formatPrice(price)}</p>
            <input
              type='range'
              name='price'
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilter}
            />
          </div>
          <div className='form-control shipping'>
            <label htmlFor='shipping'>free shipping</label>
            <input
              type='checkbox'
              name='shipping'
              id='shipping'
              onChange={updateFilter}
              checked={shipping}
            />
          </div>
        </form>
        <button type='button' className='clear-btn' onClick={clearFilter}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
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
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
