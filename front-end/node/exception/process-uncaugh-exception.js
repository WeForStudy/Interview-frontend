// catch the uncaught errors that weren't wrapped in a domain or try catch statement
// do not use this in modules, but only in applications, as otherwise we could have multiple of these bound
process.on('uncaughtException', function(err) {
    // handle the error safely
    console.log(err)
})

// the asynchronous or synchronous code that emits the otherwise uncaught error
var err = new Error('example')
throw err