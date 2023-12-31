import { render, screen } from "@testing-library/react"
import { Grade } from ".."
import { getGradeData } from "./gradeService"

jest.mock("./gradeService")

describe("Test for Grade", () => {
  it("should only be able to insert grades between 0 and 10", async () => {
    const gradeProps = {
      createdAt: "05/01/2024",
      grade: 5,
      title: "Biologia",
    }

    ;(getGradeData as jest.Mock).mockResolvedValue(gradeProps)

    render(<Grade {...gradeProps} />)

    const { getByText } = screen

    expect(getByText(gradeProps.grade.toString())).toBeGreaterThanOrEqual(0)
    expect(getByText(gradeProps.grade.toString())).toBeLessThanOrEqual(10)
  })
})
