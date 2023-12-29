import { Grade } from "./components/Grade"
import { Title } from "./components/Title"
import { GlobalStyles } from "./styles/global"
import { Container, Context } from "./styles/styles"

export const App = () => {
  return (
    <>
      <Container>
        <Title title="Bimestre 1" margin={"0 0 25px"} />
        <Context>
          <Grade />
          <Grade />
          <Grade />
          <Grade />
        </Context>

        <Title title="Bimestre 1" margin={"25px 0"} />
        <Context>
          <Grade />
          <Grade />
          <Grade />
          <Grade />
        </Context>

        <Title title="Bimestre 1" margin={"25px 0"} />
        <Title title="Bimestre 1" margin={"25px 0"} />
      </Container>
      <GlobalStyles />
    </>
  )
}
