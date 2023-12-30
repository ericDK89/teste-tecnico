export interface IGrades {
  id: string,
  title: string,
  createdAt: string,
  grade: number,
}

export interface IBimester {
  id: string,
  bimester: number,
  grades: IGrades[],
  average: number,
}
