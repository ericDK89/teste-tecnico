import styled from "styled-components";

interface TitleProps {
  margin?: string;
}

export const TitleContainer = styled.div<TitleProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: ${(props) => props.margin || 0} ;
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
`