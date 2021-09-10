'use strict'
// Функция CallBack вычисления фактериала
let fucterial = function(num1) {    
    if (num1 === 1) return num1;
  return num1*fucterial(num1-1)
}


// Функуия кеширования
let cache = new Map();

function process(num,fucterial) {
    let result;
    if (!cache.has(num)) {
         result = fucterial(num);
        console.log(`записываем в кеш ... ${result}`);  
        cache.set(num, result);
    } else {
        result = fucterial(num);
        console.log(`Достали с кеша ... ${result}`);
    }
        return cache.get(num);
}

// Проверка кеширования
let result1 = process(4, fucterial);
let result2 = process(4, fucterial);
let result3 = process(5,fucterial);


// Функция хранения последних 10 вызовов
function resultRender() {  
    const arr = []
for (let i = 1; i <= 10; i++){
    arr.push(process(i, fucterial))
    }
    return console.log(arr);
}
resultRender();
console.log(cache);

// -----------------------------------------


