// 타입과 인터페이스의 차이
interface interface_Person {
  name: string;
  age: number;
}

type type_Person = {
  name: string;
  age: number;
}

let mei: interface_Person = {
  name: '메이',
  age: 6
}

let mia: type_Person = {
  name: '미아',
  age: 6
}