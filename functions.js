var a = 10
var b = 20
a+b
30
/////////////
function
method
arrow function
iffi
generator

/////////////////
function add(a,b){
    return a+b
}

function isEven(userInput){
    var out;
    if(userInput%2){
        out = `Number ${userInput} is even`
    }else{
        out = `Number ${userInput} is odd`
    }
    return out
}
isEven(45)
'Number 45 is odd'
isEven(34)
'Number 34 is even'

function test(a,b){
    return a,b
}
test(1,2)
2
->one function cann't return more than one value

function test(a,b){
    var out = [a,b]
    return out
}
method > when function assign to variable
var add =  function(a,b){
    return a+b
}
add(1,2)