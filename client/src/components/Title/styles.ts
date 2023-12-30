import styled from "styled-components";

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const TitleStyle = styled.h3`
  color: #fff;
  font-size: 1.125rem;
  font-weight: 500;
`

export const AddButton = styled.button`
  width: 58px;
  height: 37px;

  border-radius: 12px;
  border: none;

  background-color: #e9ff1a;

  line-height: 0;

  @media screen and (min-width: 430px) {
  width: 11.25rem;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  font-weight: 600;
  }
`