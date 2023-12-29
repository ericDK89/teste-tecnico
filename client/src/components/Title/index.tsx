import { AddButton, TitleStyle, TitleContainer } from "./styles"
import plusImg from "../../assets/plus.png"

interface TitleProps {
  title: string
  margin?: string
  handleOpenModal: () => void
}

export const Title = ({ title, margin, handleOpenModal }: TitleProps) => {
  return (
    <TitleContainer margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <AddButton type="button" onClick={handleOpenModal}>
        <img src={plusImg} alt="#" title="Lançar nota" />
      </AddButton>
    </TitleContainer>
  )
}
