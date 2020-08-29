const tests = require('./test.js')

function unmix(str) {
    let newstr = ""
    for (let i = 1; i < str.length; i += 2) {
        newstr = newstr.concat(str[i], str[i - 1])
    }

    if (str.length % 2 === 1) newstr += str[str.length - 1]

    return newstr

}

//unmix tests

let a = unmix("123546") //215364

let b = unmix("hTsii  s aimex dpus rtni.g") //this is a mixed up string

let c = unmix("badce") //abcde

tests.tests(a,b,c)

let isParenthesizeBalance = (str) => {
    let stack = [];

    let open = {
        '(': ')'
    };

    let closed = {
        ')': true
    }

    for (let i = 0; i < str.length; i++) {

        let char = str[i];

        if (open[char]) {
            stack.push(char);
        } else if (closed[char]) {
            if (open[stack.pop()] !== char) return false;
        }
    }
    return stack.length === 0;
}

//parenthesize tests

let str = isParenthesizeBalance(')(())(') //not balanced
let str2 = isParenthesizeBalance('(hello( (world)') //not balanced
let str3 = isParenthesizeBalance('(hello (world))') //balanced

tests.pTests(str,str2,str3)