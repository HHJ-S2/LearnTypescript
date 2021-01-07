const sum = (a: number, b: number): number => {
  return a + b;
}

let result = sum(10, 20);
// sum(10, '20'); error

result.toLocaleString 
// 타입스크립트 api 자동완성 기능을 사용할수있다.