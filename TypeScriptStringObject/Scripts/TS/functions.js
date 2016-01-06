'use strict';
//function has parameters
//we give the functions its arguements
//arguements are mapped to the parameters
function addNumbers(v1, v2) {
    return v1 + v2;
}
//only will work after you declare the function. cannot call the function before declaring variable.
var add = function (v1, v2) {
    return v1 + v2;
};
$('div').on('click', function () {
    something();
});
function something() {
    console.log('something');
}
//Another way to create a function
var additions = new Function('val1', 'val2', 'return val1+val2;');
function func(val1, val2) {
    if (Math.random() >= 0) {
        return;
    }
    //debugger;
    console.log('still running');
}
//let cat = func('', '');
//you cannot store anything in a void variable
//if function is not meant to return anything, give it a 'void' type so that we know what type of function it is
//otherwise typescript will decipher what it is and may give it an 'any' type
console.log(addNumbers(5));
console.log(addNumbers(5, 10));
//rest parameters
function addNum(val1) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    var result = val1;
    for (var i = 0; i < values.length; i++) {
        result += values[i];
    }
    return result;
}
var result1 = addNum(1); // returns 1
var result2 = addNum(1, 2); // returns 3
var result3 = addNum(1, 2, 3); // returns 6
console.log(result1);
console.log(result2);
console.log(result3);
//let person = {
//    name: 'Bob',
//    age: 34,
//    reportJS: function () {
//        return function () {
//            return 'My name is ' + this.name;
//        };
//    },
//    reportTS: function () {
//        var _this = this;
//        return () => {                         //'this' refers to the context where it was created
//            return 'My name is ' + this.name;
//        };
//    }
//}
//let js = person.reportJS();
//console.log(js());
//let ts = person.reportTS();
//console.log(ts());
var timer = {
    counter: 0,
    count: function () {
        var _this = this;
        return function () {
            console.log(_this.counter++);
        };
    }
};
setInterval(timer.count, 1000);
//Look into class notes code to see how bind is used!
var count1 = 0;
setInterval(function () {
    console.log(count1++);
}, 1000);
var count2 = 0;
setInterval(function () {
    console.log(count2++);
}, 250);
