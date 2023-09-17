
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (true) {
            resolve('Success!');
        }
        else {
            reject("Reject")
        }
    }, 2000);
});


myPromise.then(result => {
    console.log(`Result: ${result}`); // cookie
    return result;
}).then(result => { // display data
    console.log(`Then 2 Result: ${result}`)
}).catch(result => {
    console.log(`catch Result: ${result}`)
}).finally(() => {
    console.log('Finally')
})
