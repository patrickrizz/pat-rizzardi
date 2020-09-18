const { vision_v1p1beta1 } = require('googleapis')
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

tests.tests(a, b, c)

let bracketMatcher = (str) => {
    let stack = [];

    let open = {
        '(': ')',
        '[': ']',
        '{': '}'
    };

    let closed = {
        ')': true,
        ']': true,
        '}': true
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

//bracket tests

let str = bracketMatcher(')(())(') //not balanced
let str2 = bracketMatcher('(hello( (world)') //not balanced
let str3 = bracketMatcher('(hello (world))') //balanced

let str4 = bracketMatcher('(hello [world])') //balanced
let str5 = bracketMatcher('if (str.length % 2 === 1 newstr += str[str.length - 1]') //balanced
let str6 = bracketMatcher('if (open[char]) { stack.push(char); } else if (closed[char]) { if (open[stack.pop()] !== char) return false; }') //balanced

tests.bracketTests(str, str2, str3, str4, str5, str6)

// We need to deliver a package of cookie bags. You will be given an inventory of small bags (1 kilo each) and big bags (5 kilos each), 
// along with the goal amount of kilos  that we need to ship to the customer. Return the amount of small bags the package will contain, 
// assuming we always use big bags first. Return -1 if it cannot be done.

function createPackage(small, big, goal) {
    //set bag weights
    const BIGWEIGHT = 5
    const SMALLWEIGHT = 1

    //ensure goal is at least 1 otherwise return -1
    if (goal < 1) return -1

    //find number of big bags
    let numOfBigBags = Math.floor(goal / BIGWEIGHT)

    //check if you have enough big bags in inventory
    if (numOfBigBags > big) numOfBigBags = big

    //find number of small bags
    let numOfSmallBags = ((goal - (numOfBigBags * BIGWEIGHT)) / SMALLWEIGHT)

    //check if you have enough small bags in inventory
    if (numOfSmallBags > small) return -1

    //return answer
    return numOfSmallBags
}

let package1 = createPackage(20, 1, 10)
let package2 = createPackage(15, 1, 15)
let package3 = createPackage(10, 10, -1)
let package4 = createPackage(10, 2, 5)
tests.packageTests(package1, package2, package3, package4)

// Return 1 if the array contains three increasing consecutive numbers (e.g. [..., 4,5,6 ...], [...23,24,25,...]). Otherwise return 0.

function tripleThreat(a) {
    //first, second, third index must equal first index
    let test = (a) => a[0] == a[1] - 1 && a[0] == a[2] - 2

    //loop through each index
    for (i = 0; i < a.length; i++) {

        //run the test (true or false) through 3 indexs at a time
        if (test(a.slice(i, i + 3))) {
            //return answer if true
            return 'Has consecutive numbers'
        }
    }
    //return answer if false
    return 'Does not have consecutive numbers'
}

let threat1 = tripleThreat([1, 3, 2, 3, 4, 5, 1])
let threat2 = tripleThreat([55, 66, 55, 2000])
let threat3 = tripleThreat([10, 10, -1, 0, 1])

tests.threatTest(threat1, threat2, threat3)

//Given the following sampleTree object, write a function leavesAreEqual which returns true if all values are identical, otherwise returns false

function leavesAreEqual(obj) {
    //determine if obj exists
    if (!obj) return 'No object present'

    let res = {};
    function recurse(obj) {
        for (let key in obj) {
            let value = obj[key];
            if (value != undefined) {
                if (value && typeof value === 'object') {
                    recurse(value, key);
                } else {
                    // Do your stuff here to var value
                    res[key] = value;
                }
            }
        }
    }
    recurse(obj);
    let arr = Object.values(res)
    arr = arr.reduce((a, b) => { return (a === b) ? a : false })
    return (arr === false) ? false : true
}

let obj1 = leavesAreEqual({ a: 1, b: 1, c: { c1: 1, c2: 1 } })
let obj2 = leavesAreEqual({ a: '1', b: '1', c: { c1: '1', c2: '1' } })
let obj3 = leavesAreEqual({ a: 1, b: 1, c: { c1: 2, c2: 1 } })

tests.objectProperties(obj1, obj2, obj3)