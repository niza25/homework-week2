function giveItBackLater(value, callback) {
    function loadComplete(){
        callback(value);
    }
    setTimeout(loadComplete, 100);
}

function addSomePromises(somePromise) {

}

function promiseToGiveItBackLater(value) {
    return new Promise((res, rej)=>{
        giveItBackLater(value, res);
    })

}


module.exports = { giveItBackLater, addSomePromises, promiseToGiveItBackLater };