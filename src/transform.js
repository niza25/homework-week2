function groupAdultsByAgeRange(arr) {

    const result = arr
        .filter(obj => obj.age >= 18)
        .reduce((acc, curr) => {
            const currRange = getTheRange(curr);
            if (!acc[currRange]) {
                acc[currRange] = [];
            }
            acc[currRange].push(curr);
            return acc;
        }, {});
    return result;
}

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

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange;

