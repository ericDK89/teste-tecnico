import Modal from "react-bootstrap/Modal"
import * as S from "./styles"
import closeImg from "../../assets/close.png"

interface ModalContainerProps {
  showModal: boolean
  handleCloseModal: () => void
}

export const ModalContainer = ({
  showModal,
  handleCloseModal,
}: ModalContainerProps) => {
  return (
    <Modal
      show={showModal}
      onHide={handleCloseModal}
      centered
      animation={false}
    >
      <S.ModalBody>
        <S.Header>
          <h4>Bimestre 1</h4>
          <button onClick={handleCloseModal} title="Fechar modal">
            <img src={closeImg} alt="Fechar modal" />
          </button>
        </S.Header>

        <S.Main>
          <div>
            <h6>Disciplina</h6>
            <S.Subjects>
              <S.Subject>Biologia</S.Subject>
              <S.Subject>Biologia</S.Subject>
              <S.Subject>Biologia</S.Subject>
              <S.Subject>Biologia</S.Subject>
            </S.Subjects>
          </div>

          <S.GradeInfo>
            <p>Nota</p>
            <span>7.4</span>
          </S.GradeInfo>
        </S.Main>

        <S.Footer>
          <div />
          <button>Confirmar</button>
        </S.Footer>
      </S.ModalBody>
    </Modal>
  )
}
