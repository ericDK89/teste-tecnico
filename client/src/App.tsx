import { useState } from "react"
import { Grade } from "./components/Grade"
import { Title } from "./components/Title"
import { GlobalStyles } from "./styles/global"
import { Container, Context } from "./styles/styles"
import { ModalContainer } from "./components/Modal"

export const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Container>
        <Title
          title="Bimestre 1"
          margin={"0 0 25px"}
          handleOpenModal={handleOpenModal}
        />
        <Context>
          <Grade />
          <Grade />
          <Grade />
          <Grade />

          <ModalContainer
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </Context>

        <Title
          title="Bimestre 1"
          margin={"25px 0"}
          handleOpenModal={handleOpenModal}
        />
        <Context>
          <Grade />
          <Grade />
          <Grade />
          <Grade />

          <ModalContainer
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        </Context>
      </Container>
      <GlobalStyles />
    </>
  )
}
