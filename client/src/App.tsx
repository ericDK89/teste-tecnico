import { useState } from "react"
import { Grade } from "./components/Grade"
import { Title } from "./components/Title"
import { GlobalStyles } from "./styles/global"
import { Box, Container, Context } from "./styles/styles"
import { ModalContainer } from "./components/Modal"

export const App = () => {
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
  const handleCloseModal = () => setShowModal(false)

  return (
    <>
      <Container>
        <Box>
          <Title title="Bimestre 1" handleOpenModal={handleOpenModal} />
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
        </Box>

        <Box>
          <Title title="Bimestre 1" handleOpenModal={handleOpenModal} />
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
        </Box>

        <Box>
          <Title title="Bimestre 1" handleOpenModal={handleOpenModal} />
        </Box>
      </Container>
      <GlobalStyles />
    </>
  )
}
