import { AddButton, TitleStyle, TitleContainer } from "./styles"
import plusImg from "../../assets/plus.png"

interface TitleProps {
  title: string
  handleOpenModal: () => void
}

export const Title = ({ title, handleOpenModal }: TitleProps) => {
  console.log(innerWidth)

  return (
    <TitleContainer>
      <TitleStyle>{title}</TitleStyle>
      <AddButton type="button" onClick={handleOpenModal}>
        {innerWidth > 430 ? (
          <>
            <span>Lançar nota</span>
            <img src={plusImg} alt="#" title="Lançar nota" />
          </>
        ) : (
          <img src={plusImg} alt="#" title="Lançar nota" />
        )}
      </AddButton>
    </TitleContainer>
  )
}
