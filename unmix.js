const tests = require('./test.js')

function unmix(str) {
    let newstr = ""
    for (let i = 1; i < str.length; i += 2) {
        //swap(str[i], str[i-1])
        newstr = newstr.concat(str[i], str[i - 1])
    }

    if (str.length % 2 === 1) newstr += str[str.length - 1]

    return newstr

}

//tests

let a = unmix("123546") //215364

let b = unmix("hTsii  s aimex dpus rtni.g") //this is a mixed up string

let c = unmix("badce") //abcde

let test = [
    a = "215364",
    b = "This is a mixed up string.",
    c = "abcde"
]

tests.tests(a,b,c)