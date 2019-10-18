const removeFromArray = function(array, ...arg) {

    var args = Array.from(arg);
    args = [...arg];

    array = array.filter(value => -1 === args.indexOf(value));

    return array;
}

module.exports = removeFromArray
