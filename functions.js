function addZero(arr) {
    if(arr.length < 2){
        return false
    }
    for(let i = 0; i < arr.length; i++) {
        for(let h = i + 1; h < arr.length; h++){
            if(arr[i] + arr[h] === 0){
                return true
            }
        }
    }
    return false
}
// console.log(addZero([1, 2, 3, 4, -2]));
// console.log(addZero([1, 2, 3, 4]));
// console.log(addZero([1]));

function uniqueChars(str) {
    let letters = {}
    for(let i = 0; i < str.length; i++) {
        if(letters[str[i]]) {
            return false
        } else {
            letters[str[i]] = 1
            console.log(letters)
        }
    }
    return true
}
// console.log(uniqueChars('Moonday'))

function pangramSentence(str) {
    let alphabet ='a b c d e f g h i j k l m n o p q r s t u v w x y z';
    let lowercase = str.tolowercase().replace

    // console.log(lowercase, "original:", str)

    for(let i = 0; i < alphabet.length; i++) {
        if(lowercase.indexOf(alphabet[i]) === -1) {
            return false
        }
    }
    return true
}

// console.log(pangramSentence("The quick brown fox jumps over the lazy dog!"))


function findLongestWord(arr) {
    arr.sort((a, b) => b.length - a.length)
    return arr[0].length

    let longest = arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(longest.length < arr[i]) {
            longest = arr[i]
        }
    }
}

console.log(findLongestWord(['Hi', 'Hello', 'How are you today?']))