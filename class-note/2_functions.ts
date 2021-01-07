// 함수의 파라미터에 타입을 정의하는 방식
function sum (a: number, b: number){
  return a + b;
}
sum(10, 20);

// 함수의 반환(return)값에 타입을 정의하는 방식
function add(): number{
  return 10;
}

// 최종적으로 함수에 타입을 정의하는 방식
function sum2 (a: number, b: number): number{
  return a + b;
}
sum2(10, 20);

// 파라미터를 제한하는 특성
function sum3 (a: number, b: number): number{
  return a + b;
}
sum2(10, 20, 30, 40); // Error 파라미터의 개수와 일치하지 않음

// 함수의 옵셔널 파라미터
function log(a: string, b?: string){
  // 파라미터에 ? 를 붙여주면 필요에 따라 선택적으로 인자를 전달할 수 있음
}
log('hello world');
log('hello ts', 'abc');