function calc(x, ops, y) {
   
//ops is mathematical operation

    if (ops == "+") { 
    return x + y;
    }

    else if (ops == "-") { 
    return x - y;
    }

    else if (ops == "*") { 
    return x * y;
    }

    else if (ops == "/") { 
    return x / y;
    }

    else {
        return "invalid lol";
    }
}

console.log(2 + " times " + 23 + " equals " + calc(2, "*", 23));
console.log(calc(929, "/", 9.4));
console.log(calc(1, "+", 202));