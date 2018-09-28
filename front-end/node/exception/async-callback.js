var divide = function (x, y, next) {
    // if error condition?
    if (y === 0) {
        // "throw" the error safely by calling the completion callback
        // with the first argument being the error
        next(new Error("Can't divide by zero"))
    } else {
        // no error occured, continue on
        next(null, x / y)
    }
}

var continueElsewhere = function (err, result) {
    throw new Error('elsewhere has failed')
}

try {
    divide(4, 2, continueElsewhere)
    // ^ the execution of divide, and the execution of 
    //   continueElsewhere will be inside the try statement
} catch (err) {
    console.log(err.stack)
    // ^ will output the "unexpected" result of: elsewhere has failed
}