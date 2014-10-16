/* EXERCISE 01 - Translation
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
        sum++;
    }
}
console.log(sum);
*/


//EXERCISE 02 - 

//custom sum function
var numbers_to_be_added = [1,2,3,4,5,6,7];

function sum(numbers_to_be_added) {
    var total = 0;
    for (var i = 0; i < numbers_to_be_added.length; i++){
        total += numbers_to_be_added[i];
    }return total;
}
console.log(sum(numbers_to_be_added));

//custom even function

var numbers_for_even_check = [1,2,3,4,5,6,7];

function even(numbers_for_even_check) {
    even_list = [];
    for (var i = 0; i < numbers_for_even_check.length; i++){
        if (numbers_for_even_check[i] % 2 === 0){
            even_list.push(numbers_for_even_check[i]);
        }
    }return even_list;
}
even(numbers_for_even_check);

//fibonacci function
function fibonacci_set(max){
    if (max > 1) {
        var fib_list = [1];
        var current_fib = 1;
        while (current_fib < max){
            fib_list.push(current_fib);
            var last = (fib_list.length - 1);
            current_fib = fib_list[last] + fib_list[(last - 1)];
        }return fib_list;
    }
    else {
        return [1, 1];
    }
}
console.log(fibonacci_set(1000));



console.log(sum(even(fibonacci_set(4000000))));