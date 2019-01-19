function groupAdultsByAgeRange(arr) {

    function getTheRange(obj) {
        if (obj.age <= 20) {
            return '20 and younger'
        } else if (obj.age >= 21 && obj.age <= 30) {
            return '21-30'
        } else if (obj.age >= 31 && obj.age <= 40) {
            return '31-40'
        } else if (obj.age >= 41 && obj.age <= 50) {
            return '41-50'
        } else if (obj.age >= 51) {
            return '51 and older'
        }
    }

    const result = arr.filter(obj => obj.age > 18)
        .reduce((acc, curr) => {
            const currRange = getTheRange(curr);
            if (!acc[currRange]) {
                acc[currRange] = [];
            }
            acc[currRange].push(curr);
            return acc
        }, {});

    return result;
}

/* function getTheRange(obj) {
    if (obj.age <= 20) {
        return '20 and younger'
    } else if (obj.age >= 21 && obj.age <= 30) {
        return '21-30'
    } else if (obj.age >= 31 && obj.age <= 40) {
        return '31-40'
    } else if (obj.age >= 41 && obj.age <= 50) {
        return '41-50'
    } else if (obj.age >= 51) {
        return '51 and older'
    }
} */

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;

// testeing ////////////////////////////
/* 
const ppl = [
    {
        name: 'Iza',
        age: 20
    },
    {
        name: 'Bob',
        age: 34
    },
    {
        name: 'Bill',
        age: 35
    },
    {
        name: 'Marta',
        age: 51
    },
    {
        name: 'Kat',
        age: 15
    }
] */


/* const newList2 = ppl.filter(obj => obj.age > 18)
    .reduce((acc, curr) => {
        // get the name of the range
        const currRange = getTheRange(curr);
        // add a property to acc and set an empty arr
        if (!acc[currRange]) {
            acc[currRange] = [];
        }
        // add curr to the arr of range+
        acc[currRange].push(curr);
        return acc
    }, {})


console.log(newList2);


const result2 = {
    '31-40': [{ name: 'Anna', age: 31 }, { name: 'John', age: 32 }],
    '51 and older': [{ name: 'Hank', age: 60 }]
} */




