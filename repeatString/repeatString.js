const repeatString = function(text, number) {
    let i = 0;
    let completeString = '';
    
    if(number < 0){
        return 'ERROR';
    } else {
        for(i; i < number; i++){
            completeString += text;
        }
        return completeString;
    }

}

module.exports = repeatString
