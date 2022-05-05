import React from "react";
import styled from "styled-components";
import { PageHero } from "../../components";
import aboutImg from "../../assets/hero-bcg-1.jpg";
import aboutImg1 from "../../assets/hero-bcg-3.jpg";
import aboutImg2 from "../../assets/hero-bcg.jpeg";

export const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <img src={aboutImg} alt='about us' />
        <article>
          <div className='title'>
            <h2>EXPERIENCE NEW WAY OF DESIGNING</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            soluta pariatur fugit sit, voluptatem explicabo dolore alias enim id
            error beatae recusandae tempore modi itaque optio reprehenderit?
            Beatae, provident atque. Officiis suscipit beatae, cupiditate
            architecto nam dolorum, harum perferendis velit deserunt ipsa
            doloremque quisquam voluptatem sit adipisci et autem eveniet ex
            provident? Repellat tenetur recusandae porro earum beatae mollitia
            aliquam!
          </p>
        </article>
      </Wrapper>
      <Wrapper className='page section section-center'>
        <article>
          <div className='title'>
            <h2>EXPERIENCE THE SHOP</h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            soluta pariatur fugit sit, voluptatem explicabo dolore alias enim id
            error beatae recusandae tempore modi itaque optio reprehenderit?
            Beatae, provident atque. Officiis suscipit beatae, cupiditate
            architecto nam dolorum, harum perferendis velit deserunt ipsa
            doloremque quisquam voluptatem sit adipisci et autem eveniet ex
            provident? Repellat tenetur recusandae porro earum beatae mollitia
            aliquam!
          </p>
        </article>
        <img src={aboutImg1} alt='about us' />
      </Wrapper>
      <Wrapper className='page section section-center'>
        <img src={aboutImg2} alt='about us' />
        <article>
          <div className='title'>
            <h2>EXPERIENCE WOOD-WORK ITEMS </h2>
            <div className='underline'></div>
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            soluta pariatur fugit sit, voluptatem explicabo dolore alias enim id
            error beatae recusandae tempore modi itaque optio reprehenderit?
            Beatae, provident atque. Officiis suscipit beatae, cupiditate
            architecto nam dolorum, harum perferendis velit deserunt ipsa
            doloremque quisquam voluptatem sit adipisci et autem eveniet ex
            provident? Repellat tenetur recusandae porro earum beatae mollitia
            aliquam!
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;
