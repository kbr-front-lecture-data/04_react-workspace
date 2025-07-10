import { createContext } from "react";

export const UserContext = createContext([
  {no: 1, name: '김철수', age: 25, job: '개발자'},
  {no: 2, name: '이영희', age: 30, job: '디자이너'},
  {no: 3, name: '박민수', age: 28, job: '기획자'},
]);