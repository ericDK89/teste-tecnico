import { IBimester } from "../@types/grades"

export const inMemoryAPI: IBimester[] = [
  {  
    id: "1",
    bimester: 1,
    average: 6.95,
    grades: [
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
        grade: 7,
      },
    ]
  },
  {  
    id: "2",
    bimester: 2,
    average: 9.5,
    grades: [
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
        grade: 7,
      },
    ]
  },
]



