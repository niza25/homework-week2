function giveItBackLater(value, callback) {
    setTimeout(() => { callback(value) }, 100);
}

function addSomePromises(somePromise) {
    return new Promise((resolve, reject) => {
        somePromise
            .then(resString => {
                resolve(resString + resString)
            })
            .catch(rejString => resolve(rejString + rejString + rejString))
    });
}

function promiseToGiveItBackLater(value) {
    return new Promise((res, rej) => {
        giveItBackLater(value, res);
    })
}

module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };
