let tests = (a, b, c) => {
    a_expected = "215364"
    b_expected = "This is a mixed up string."
    c_expected = "abcde"    

    if (a == a_expected) {
        console.log(`${a} Passed`)
    } else {
        console.log(`Test a equals ${a} but should equal '${a_expected}'`)
    }

    if (b == b_expected) {
        console.log(`${b} Passed`)
    } else {
        console.log(`Test a equals ${b} but should equal '${b_expected}'`)
    }

    if (c == c_expected) {
        console.log(`${c} Passed`)
    } else {
        console.log(`Test a equals ${c} but should equal '${c_expected}'`)
    }
}

let pTests = (str, str2, str3) => {
    console.log(str)
    console.log(str2)
    console.log(str3)
}

exports.tests = tests
exports.pTests = pTests