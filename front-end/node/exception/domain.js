var d = require('domain').create()
d.on('error', function(err){
    // handle the error safely
    console.log(err)
})

// catch the uncaught errors in this asynchronous or synchronous code block
d.run(function(){
    // the asynchronous or synchronous code that we want to catch thrown errors on
    var err = new Error('example')
    throw err
})