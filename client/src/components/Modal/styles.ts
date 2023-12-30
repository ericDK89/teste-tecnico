import styled, { css } from "styled-components"
import Modal from "react-bootstrap/Modal"

interface SubjectProps {
  title: string
}

export const ModalBody = styled(Modal.Body)`
  padding: 2rem 2.5rem;
  background-color: #0f0f0f;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;

  h4 {
    margin: 0;
    padding: 0;
    font-size: 2rem;
    font-weight: 500;
  }

  button {
    border: none;
    background-color: transparent;
  }
`

export const Main = styled.main`
  margin: 2.75rem 0 1.5rem;

  h6 {
    font-size: 1.125rem;
    font-weight: 500;
    color: #fff;
    margin-bottom: 1.5rem;
  }
`

export const Subjects = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.125rem 1.5rem;
  margin-bottom: 1.125rem;
`

export const Subject = styled.div<SubjectProps>`
  padding: 1.125rem;

  ${({ title }) =>
    css`
      ${title === "Biologia" &&
      css`
        background-color: rgba(204, 64, 144, 0.2);
      `}
      ${title === "Artes" &&
      css`
        background-color: rgba(5, 162, 194, 0.2);
      `}
      ${title === "Geografia" &&
      css`
        background-color: rgba(194, 103, 25, 0.2);
      `}
      ${title === "Sociologia" &&
      css`
        background-color: rgba(155, 25, 194, 0.2);
      `}
    `}

  border-radius: 20px;

  font-size: 1.125rem;
  font-weight: 500;
  color: #ecedee;
  text-align: center;
`

export const GradeInfo = styled.div`
  p {
    font-size: 0.875rem;
    color: #ecedee;
    margin-bottom: 0.5rem;
  }

  span {
    display: inline-block;
    color: #6d6d6d;
    border: 1px solid #424242;
    border-radius: 12px;

    padding: 1rem 2.25rem;
  }
`

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  margin-top: 1.5rem;

  button {
    color: #0f0f0f;
    background-color: #e9ff1a;

    padding: 1rem 1.5rem;

    border-radius: 12px;
    border: none;

    font-weight: 600;
  }
`
