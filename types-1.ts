//boolean type
const answer: boolean = true;
const answerWrong: boolean = false;
//number type
let int: number = 4;

// int = '4; Тип "string" не может быть назначен для типа "number"

//string type
const str: string = 'hello';

//array of numbers 
const arrNum: number[] = [1, 2, 3, 4, 5];
const arrNum2: Array<number> = [1, 2, 3, 4, 5]; //запись generic

// tuple type - мы создаём массив из разных типов данных
const contact: [string, number] = ['Alex', 12345];

//any type - подходит для переопределения типа данных; используется крайне редко
let variable: any = 42;

variable = 'string';

//void type - предназначен для функции, которая ничего не возвращает
function sayMyName(name: string): void  {
  console.log(name);
}

sayMyName('Alex');

//never type - используется когда функция заканчивается ошибкой, либо когда она работает постоянно
function throwError(message: string): never {
  throw new Error(message);
}

throwError('alex you are wrong!');

//Type - свои типы
//Ниже мы задали свой тип стрингу через ключевое слово type
type Login = string;

const login: Login = 'Admin';
//Здесь мы создали алиас, который может принимать в себя 2 типа: стрингу и число 
type ID = string | number;

let onePoint: ID = 4;
let winnerMessage: ID = 'Congratulations!';

type SomeType = string | null | undefined;




























