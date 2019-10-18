const reverseString = function(word) {
    let array = [];
    let i = 1;
    while(i <= word.length){
        array.push(word.substr(word.length-i, 1));
        i++;
    }
    return array.join('');
}

module.exports = reverseString
