// Promises revision

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Could not resolve!");
    }, 2000);

    setTimeout(() => {
        resolve(1);
    }, 100);
});

p1.then(data => {
    console.log('p1 got resolved with value: ', data);
    return Promise.resolve(2);
}).catch(error => {
    console.log('p1 got rejected with error: ', error);
}).then(data => {
    console.log('p2 got resolved with value: ', data);
}).catch(error => {
    console.log('p2 got rejected with error: ', error);
});

p2 = Promise.resolve(2);


p2.then(data => {
    console.log('p2 got resolved with value: ', data);
}).catch(error => {
    console.log('p2 got rejected with error: ', error);
});

Promise.resolve(1).then(data => {
    console.log(data);
    return Promise.resolve(2)
}).then(data => {
    console.log(data);
    return Promise.resolve(3)
}).then(data => {
    console.log(data);
    return Promise.resolve(4)
}).then(data => {
    console.log(data);
    return Promise.resolve(5)
}).then(data => {
    console.log(data);
    return Promise.resolve(6)
}).then(data => {
    console.log(data);
    return Promise.resolve(7)
}).then(data => {
    console.log(data);
    return Promise.resolve(8)
}).then(data => {
    console.log(data);
});


function f1(callback) {
    setTimeout(() => {
        callback(1)
    }, 100);
}

function f2(callback) {
    setTimeout(() => {
        callback(2)
    }, 100);
}


function f3(callback) {
    setTimeout(() => {
        callback(3)
    }, 100);
}

function f4(callback) {
    setTimeout(() => {
        callback(4)
    }, 100);
}


function f5(callback) {
    setTimeout(() => {
        callback(5)
    }, 100);
}

function f6(callback) {
    setTimeout(() => {
        callback(6)
    }, 100);
}

function f7(callback) {
    setTimeout(() => {
        callback(7)
    }, 100);
}


function f8(callback) {
    setTimeout(() => {
        callback(8)
    }, 100);
}

f1(data => {
    console.log(data);
    f2(data2 => {
        console.log(data2);
        f3(data3 => {
            console.log(data3);
            f4(data4 => {
                console.log(data4);
                f5(data5 => {
                    console.log(data5);
                });
            });
        });
    });
});



const promisesArray = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), 9, 10];


Promise.all(promisesArray).then(values => {
    console.log(values);
});