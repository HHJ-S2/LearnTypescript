// 연산자를 이용한 타입 정의
let sth: string | number | boolean;

function logMessage(value: string | number) {
  if (typeof value === 'number'){
    value.toLocaleString();
  }
  if (typeof value === 'string'){
    value.toString();
  }
  // 매개변수가 문자열 혹은 숫자열이 아닐경우 에러 핸들링
  throw new TypeError('value must be string or number.');
}

logMessage('hello');
logMessage(100);

// 유니온 타입과 인터섹션 타입
interface Developer {
  name: string;
  age: number;
}

interface Person {
  name: string;
  skill: string;
}

// 유니온 타입(| 연산자)
function askSomeone(someone: Developer | Person){
  someone.name; // O
  someone.skill; // X
  someone.age; // X
}

askSomeone({name: '디벨로퍼', age: 20});
askSomeone({name: '디벨로퍼', skill: '웹 개발'});

// 인터섹션 타입(& 연산자)
function askSomeone2(someone: Developer & Person){
  someone.name; // O
  someone.skill; // O
  someone.age; // O
}

askSomeone2({name: '디벨로퍼', age: 25, skill: '웹 개발'});
askSomeone2({name: '디벨로퍼', age: 25}); // error: &연산자는 인터페이스의 모든 속성타입을 갖지 않으면 안된다.

