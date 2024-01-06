export const getGradeData = async () => {
  try {
    const response = await fetch(
      "https://my-json-server.typicode.com/ericDK89/desafio-json/data"
    )

    if (!response.ok) {
      throw new Error("Erro ao obter dados")
    }

    const data = await response.json()

    return data
  } catch (error) {
    console.error("Erro ao obter dados:", error)
    throw error
  }
}
