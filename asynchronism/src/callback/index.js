function sum(num1, num2){
    return num1 + num2;
}

function calc(num1,num2, callback){
    return callback(num1,num2);
}

console.log(calc(20,42,sum));

function date(callback){
    console.log(new Date);
    setTimeout(function() {
        let date = new Date;
        callback(date);
    }, 300);
}

function printDate(dateNow){
    console.log(dateNow);
}

date(printDate);
