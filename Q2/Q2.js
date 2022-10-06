const resolvedPromise = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let success = {'message': 'delayed success!'}
        console.log(success);
        resolve()
    }, 500)
})

const rejectedPromise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject(new Error('error: delayed exception'));
    }, 500);
}).catch(function(e) {
    console.log(e);
});
