export interface Person {
  age: number;
  name: string;
  lastname?: string;
  gender: string;
  married?: boolean;
  imgUrl?: string;
  email?: string;
}

export enum WorkLifeBalance {
  Happy,
  Unsatisfied,
  ReadyForRevolution
}
