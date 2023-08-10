//boolean type
var answer = true;
var answerWrong = false;
//number type
var int = 4;
// int = '4; Тип "string" не может быть назначен для типа "number"
//string type
var str = 'hello';
//array of numbers 
var arrNum = [1, 2, 3, 4, 5];
var arrNum2 = [1, 2, 3, 4, 5]; //запись generic
// tuple type - мы создаём массив из разных типов данных
var contact = ['Alex', 12345];
//any type - подходит для переопределения типа данных; используется крайне редко
var variable = 42;
variable = 'string';
//
function sayMyName(name) {
    console.log(name);
}
sayMyName('Alex');
