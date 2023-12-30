import styled, { css } from "styled-components"

interface GradeContainerProps {
  title: string
}

interface GradeInfoProps {
  grade: number
}

export const GradeStyle = styled.div`
  display: flex;
  width: 100%;
`

export const GradeContainer = styled.div<GradeContainerProps>`
  width: 100%;
  height: 146px;

  border-radius: 20px;

  ${({ title }) =>
    css`
      ${title === "Biologia" &&
      css`
        background-color: #cc4090;
      `}
      ${title === "Artes" &&
      css`
        background-color: #05a2c2;
      `}
      ${title === "Geografia" &&
      css`
        background-color: #c26719;
      `}
      ${title === "Sociologia" &&
      css`
        background-color: #9b19c2;
      `}
    `}
`

export const GradeContext = styled.div`
  padding: 1rem;
  color: #ecedee;

  p {
    font-size: 1.125rem;
    font-weight: 500;

    padding: 0;
    margin: 0;
  }

  span {
    font-size: 0.75rem;
    display: block;
  }
`

export const GradeInfo = styled.div<GradeInfoProps>`
  display: flex;
  align-items: center;
  gap: 6.43px;

  margin-top: 1rem;
  padding: 5px 13.82px;

  width: 100%;

  background-color: rgba(15, 15, 15, 0.7);

  p {
    font-size: 0.75rem;

    ${({ grade }) =>
      css`
        ${grade <= 5.9 &&
        css`
          color: #ff5964;
        `}
        ${grade >= 6 &&
        css`
          color: #ffff99;
        `}
      ${grade >= 8 &&
        css`
          color: #05ff00;
        `}
      `}

    padding: 0;
    margin: 0;
  }
`

export const DeleteButton = styled.button`
  width: 24px;
  height: 26px;

  margin-left: 2px;

  background-color: transparent;

  border: none;
`
