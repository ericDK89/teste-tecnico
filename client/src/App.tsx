import { useEffect, useState } from "react"
import { Grade } from "./components/Grade"
import { Title } from "./components/Title"
import { GlobalStyles } from "./styles/global"
import { Box, Container, Context } from "./styles/styles"
import { ModalContainer } from "./components/Modal"
import { inMemoryAPI } from "./memory/in-memory-api"
import { IBimester } from "./@types/grades"

export const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [selectedBimester, setSelectedBimester] = useState<IBimester | null>(
    null
  )
  const [grades, setGrades] = useState<IBimester[]>([])

  useEffect(() => {
    setGrades(inMemoryAPI)
  }, [])

  const handleOpenModal = (bimester: IBimester) => {
    setSelectedBimester(bimester)
    setShowModal(true)
  }
  const handleCloseModal = () => {
    setSelectedBimester(null)
    setShowModal(false)
  }

  return (
    <>
      <Container>
        {grades.map((bimester) => (
          <Box key={bimester.id}>
            <Title
              title={`Bimestre ${bimester.bimester}`}
              handleOpenModal={() => handleOpenModal(bimester)}
            />
            <Context>
              {bimester.grades.map((grade) => (
                <Grade
                  key={grade.id}
                  createdAt={grade.createdAt}
                  grade={grade.grade}
                  title={grade.title}
                />
              ))}
            </Context>
          </Box>
        ))}

        {selectedBimester && (
          <ModalContainer
            bimester={selectedBimester}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
          />
        )}
      </Container>
      <GlobalStyles />
    </>
  )
}
