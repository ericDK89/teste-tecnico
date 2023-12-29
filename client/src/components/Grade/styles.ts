import styled from "styled-components";

export const GradeStyle = styled.div`
  display: flex;
`

export const GradeContainer = styled.div`
  width: 100%;
  height: 146px;

  border-radius: 20px;
  
  background-color: #cc4090;
`

export const GradeContext = styled.div`
  padding: 1rem;
  color: #ecedee;

  p {
    font-size: 1.125rem;
    font-weight: 500;
  }

  span {
    font-size: 0.75rem;
  }
`

export const GradeInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 6.43px;

  padding: 5px 13.82px;

  width: 100%;

  background-color: rgba(15, 15, 15, 0.7);

  p {
    font-size: 0.75rem;
    color: #ff5964;
  }
`

export const DeleteButton = styled.button`
  width: 24px;
  height: 26px;

  margin-left: 2px;

  background-color: transparent;

  border: none;
`