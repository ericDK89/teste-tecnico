import styled from "styled-components";

export const Container = styled.main`
  max-width: 389px;
  padding: 62px 16px;
  margin: 0 auto;

  @media screen and (min-width: 430px){
    max-width: 852px;
  }
`

export const Context = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 34px 8px;

  @media screen and (min-width: 430px){
    display: flex;
    gap: 5rem;
  }
`