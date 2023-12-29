import * as S from "./styles"
import redStaticImg from "../../assets/red-statics.png"
import trashImg from "../../assets/trash.png"

export const Grade = () => {
  return (
    <>
      <S.GradeStyle>
        <S.GradeContainer>
          <S.GradeContext>
            <p>Biologia</p>
            <span>28/04/2022</span>
          </S.GradeContext>

          <S.GradeInfo>
            <img src={redStaticImg} alt="#" />
            <p>Nota: 3</p>
          </S.GradeInfo>
        </S.GradeContainer>

        <S.DeleteButton type="button" title="Deletar nota">
          <img src={trashImg} alt="Delete" />
        </S.DeleteButton>
      </S.GradeStyle>
    </>
  )
}
