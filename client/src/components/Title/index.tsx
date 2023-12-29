import { AddButton, TitleStyle, TitleContainer } from "./styles"
import plusImg from "../../assets/plus.png"

interface TitleProps {
  title: string
  margin?: string
}

export const Title = ({ title, margin }: TitleProps) => {
  return (
    <TitleContainer margin={margin}>
      <TitleStyle>{title}</TitleStyle>
      <AddButton>
        <img src={plusImg} alt="#" title="Lançar nota" />
      </AddButton>
    </TitleContainer>
  )
}
