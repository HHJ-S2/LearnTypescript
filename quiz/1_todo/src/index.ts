// any : 모든 타입 기입 가능
let todoItems: {id: number, title: string, done: boolean }[];
// let todoItems: Array<object>;

// type 정의
// type Todo = {
//   id: number;
//   title: string;
//   done: boolean;
// }

interface Todo {
  id: number;
  title: string;
  done: boolean;
}

// api
function fetchTodoItems(): Todo[] {
  const todos = [
    { id: 1, title: '안녕', done: false },
    { id: 2, title: '타입', done: false },
    { id: 3, title: '스크립트', done: false },
  ];

  return todos;
}

// crud methods
function fetchTodos(): object[] {
  const todos = fetchTodoItems();
  return todos;
}

function addTodo(todo: Todo): void {
  todoItems.push(todo);
}

function deleteTodo(index: number): void {
  todoItems.splice(index, 1);
}

function completeTodo(index: number, todo: object[]): void {
  todo.done = true; // 파라미터의 todo.done에 대한 type을 지정해주지 않으면 TS error
  todoItems.splice(index, 1, todo);
}

// business logic
function logFirstTodo(): object {
  return todoItems[0];
}
 
function showCompleted(): object[] {
  return todoItems.filter((item: Todo) => item.done);
}

// TODO: 아래 함수의 내용을 채워보세요. 아래 함수는 `addTodo()` 함수를 이용하여 2개의 새 할 일을 추가하는 함수입니다.
function addTwoTodoItems(): void {
  // 함수를 두 번 호출하여 todoItems에 새 할 일이 2개 추가되어야 합니다.
  addTodo({ id: 4, title: '할일 1', done: false });
  addTodo({ id: 5, title: '할일 2', done: false });
}

// NOTE: 유틸 함수
function log(): void {
  console.log(todoItems);
}

todoItems = fetchTodoItems();
addTwoTodoItems();
log();
