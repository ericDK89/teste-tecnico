import * as S from "./styles"
import redStaticImg from "../../assets/red-statics.png"
import yellowStaticImg from "../../assets/yellow-statics.png"
import greenStaticImg from "../../assets/green-statics.png"
import trashImg from "../../assets/trash.png"

interface GradeProps {
  title: string
  createdAt: string
  grade: number
}

export const Grade = ({ title, createdAt, grade }: GradeProps) => {
  return (
    <>
      <S.GradeStyle>
        <S.GradeContainer title={title}>
          <S.GradeContext>
            <p>{title}</p>
            <span>{createdAt}</span>
          </S.GradeContext>

          <S.GradeInfo grade={grade}>
            {grade <= 5.9 ? (
              <img src={redStaticImg} alt="#" />
            ) : grade >= 8 ? (
              <img src={greenStaticImg} alt="#" />
            ) : (
              <img src={yellowStaticImg} alt="#" />
            )}

            <p>Nota: {grade}</p>
          </S.GradeInfo>
        </S.GradeContainer>

        <S.DeleteButton type="button" title="Deletar nota">
          <img src={trashImg} alt="Delete" />
        </S.DeleteButton>
      </S.GradeStyle>
    </>
  )
}
