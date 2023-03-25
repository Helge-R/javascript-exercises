const removeFromArray = function(array, ...args) {
    for (val of args) {
        if (array.indexOf(val) != -1) {
            const index = array.indexOf(val);
            array.splice(index, 1);
        }
    }
    return array;
};

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(array, ...args) {
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
