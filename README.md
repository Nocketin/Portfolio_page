 Задача:
 Напиши функцию, которая при заданном числе n (n >= 1) возвращает n-е число в последовательности Фибоначчи.
 Например:
 nthFibo(4) вернёт 2

 Потому что 2 - это 4-е число в последовательности Фибоначчи.
 Для справки, первые два числа в последовательности Фибоначчи - 0 и 1, и каждое последующее число является суммой двух предыдущих.    
    
     function nthFibo(n) {
     let answer;
     let previous1 = 0;
     let previous2 = 1;

     if(n===1) return 0
     if(n===2) return 1

    for (let i = 3; i <= n; i++) {
    let next = previous1 + previous2;
    console.log(previous1, previous2); 
     previous1 = previous2;
    previous2 = next;
    
    answer = next;
    }

    return answer;
    }
