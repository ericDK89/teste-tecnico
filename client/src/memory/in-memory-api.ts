interface IinMemoryAPI {
  id: string,
  title: string,
  createdAt: string,
  grade: number,
}

export const inMemoryAPI: IinMemoryAPI[] = [
  {
    id: "1",
    title: "Biologia",
    createdAt: "28/04/2022",
    grade: 5.9
  },
  {
    id: "2",
    title: "Artes",
    createdAt: "28/04/2022",
    grade: 6.7
  },
  {
    id: "3",
    title: "Geografia",
    createdAt: "28/04/2022",
    grade: 8.2
  },
  {
    id: "4",
    title: "Sociologia",
    createdAt: "28/04/2022",
    grade: 7
  },
]



