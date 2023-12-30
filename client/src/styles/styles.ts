import styled from "styled-components";

export const Container = styled.main`
  max-width: 24rem;
  padding: 0 1rem 2rem;
  margin: 0 auto;

  @media screen and (min-width: 430px){
    max-width: 65rem;
  }
`

export const Box = styled.div`
  margin-top: 3.25rem;
`

export const Context = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px 8px;

  margin-top: 2rem;

  @media screen and (min-width: 430px){
    display: flex;
    gap: 5rem;
  }
`

