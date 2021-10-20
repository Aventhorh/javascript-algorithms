/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    let string = "";
    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
        if (str[i - 1] === " ") {
            string += letter.toUpperCase();
        } else if (str[i - 1] === undefined) {
            string += letter.toUpperCase();
        } else if (str[i - 1] === null) {
            string += letter.toUpperCase();
        } else if (str[i - 1] === 0) {
            string += letter.toUpperCase();
        } else {
            string += letter;
        }
    }
    return string;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"

