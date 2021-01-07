// TS 문자열 선언
let str: string = 'hello';

// TS 숫자열
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3]; // Array 타입 안에 요소는 number이다.
let arr2: number[] = [1, 2, 3];

// TS 튜플
let address: [string, number] = ['gangnam', 100]; // 배열안의 요소 각각에 타입을 지정해준다.

// TS 객체
let obj: object = {};
let person: object = {
  name: 'capt',
  age: 100
};
let person2: { name: string, age: number } = {
  name: 'capt',
  age: 100
}

// TS 진위값
let show: boolean = true;