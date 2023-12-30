import Modal from "react-bootstrap/Modal"
import * as S from "./styles"
import closeImg from "../../assets/close.png"
import { IBimester } from "../../@types/grades"

interface ModalContainerProps {
  showModal: boolean
  handleCloseModal: () => void
  bimester: IBimester | null
}

export const ModalContainer = ({
  showModal,
  handleCloseModal,
  bimester,
}: ModalContainerProps) => {
  const grades = bimester ? bimester.grades : []

  return (
    <>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        centered
        animation={false}
      >
        <S.ModalBody>
          <S.Header>
            <h4>{`Bimestre ${bimester ? bimester.bimester : ""}`}</h4>
            <button onClick={handleCloseModal} title="Fechar modal">
              <img src={closeImg} alt="Fechar modal" />
            </button>
          </S.Header>

          <S.Main>
            <div>
              <h6>Disciplina</h6>
              <S.Subjects>
                {grades.map((grade) => (
                  <S.Subject key={grade.id}>{grade.title}</S.Subject>
                ))}
              </S.Subjects>
            </div>

            <S.GradeInfo>
              <p>Nota</p>

              <span>{bimester ? bimester.average : ""}</span>
            </S.GradeInfo>
          </S.Main>

          <S.Footer>
            <div />
            <button>Confirmar</button>
          </S.Footer>
        </S.ModalBody>
      </Modal>
    </>
  )
}
