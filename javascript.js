/* EXERCISE 01 - Translation
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
        sum++;
    }
}
console.log(sum);



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

*/

// EXERCISE 03
/* the following code is work in progress. 

var duplicateArray = [];

var arr = ["katie", "true", true, 19, "gargoyles", "!", 2 + 3, "2 + 3", 19, "19", 19 === "19", 6, false, false];

var o = {};

for (var i = 0; i < arr.length; i++)
{
    if (arr[i] in o)
    {
        o[arr[i]] += 1;
    }
    else
    {
        o[arr[i]] = 1;
        o.arr[i].type = typeof(arr[i]);
    }
}

for (var prop in o)
{
    if (o[prop] > 1)
    {
        duplicateArray.push(prop);
    }
}

console.log(duplicateArray);
*/


//EXERCISE 4
/*
var catObj = {
    tiredness : 20,
    loneliness : 3,
    hunger: 20,
    happiness: 15,
    obedientness: -5000,
    feed: function()
    {
        console.log("sssssslurp");
        this.hunger = this.hunger -5;
    },
    cuddle: function()
    {
        console.log("purrrrr");
        this.loneliness = this.loneliness -1;
    },
    sleepytime: function()
    {
        console.log("zzzzzzzzzzz");
        this.tiredness = this.tiredness -1;
    },
    play: function()
    {
        console.log("weeeeeee");
        this.happiness = this.happiness -5;
    },
    spraybottle: function()
    {
        console.log("hisssssss");
        this.obedientness = this.obedientness +1;
    },
};

function catstatus(catObj)
{
    for (var prop in catObj)
    {
        console.log(prop + ":" + catObj[prop]);
    }
}

catstatus(catObj);
*/

//EXERCISE 5
