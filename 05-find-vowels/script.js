/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {
    const letter = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е',
        'А', 'Я', 'О', 'Ё', 'У', 'Ю', 'Ы', 'И', 'Э', 'Е'];
    let result = 0;
    for (let i = 0; i < str.length; i++) {
        if (letter.includes(str[i])) {
            result++;
        }
    }
    return result;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3