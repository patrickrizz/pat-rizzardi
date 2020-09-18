let tests = (a, b, c) => {
    console.log('------------------------')
    console.log('Sentence unscramble test')
    console.log('------------------------')

    a_expected = "215364"
    b_expected = "This is a mixed up string."
    c_expected = "abcde"

    if (a === a_expected) {
        console.log(`1. Passed, ${a}`)
    } else console.log(`1. Test a equals ${a} but should equal '${a_expected}'`)

    if (b === b_expected) {
        console.log(`2. Passed, ${b}`)
    } else console.log(`2. Test a equals ${b} but should equal '${b_expected}'`)

    if (c === c_expected) {
        console.log(`3. Passed, ${c}`)
    } else console.log(`3. Test a equals ${c} but should equal '${c_expected}'`)
}

let bracketTests = (str, str2, str3, str4, str5, str6) => {
    console.log('------------------------')
    console.log('Bracket Matcher')
    console.log('------------------------')

    let str_expected = false
    let str2_expected = false
    let str3_expected = true
    let str4_expected = true
    let str5_expected = false
    let str6_expected = true

    if (str === str_expected) {
        console.log(`1. Passed, ${str}`)
    } else console.log(`1.  Failed, expected answer: ${str_expected}`)

    if (str2 === str2_expected) {
        console.log(`2. Passed, ${str2}`)
    } else console.log(`2. Failed, expected answer: ${str2_expected}`)

    if (str3 === str3_expected) {
        console.log(`3. Passed, ${str3}`)
    } else console.log(`3. Failed, expected answer: ${str3_expected}`)

    if (str4 === str4_expected) {
        console.log(`4. Passed, ${str4}`)
    } else console.log(`4. Failed, expected answer: ${str4_expected}`)

    if (str5 === str5_expected) {
        console.log(`5. Passed, ${str5}`)
    } else console.log(`5. Failed, expected answer: ${str5_expected}`)

    if (str6 === str6_expected) {
        console.log(`6. Passed, ${str6}`)
    } else console.log(`6. Failed, expected answer: ${str6_expected}`)

}

let packageTests = (t1, t2, t3, t4) => {
    console.log('------------------------')
    console.log('How many small bags')
    console.log('------------------------')

    t1_expected = 5
    t2_expected = 10
    t3_expected = -1
    t4_expected = 0

    if (t1 === t1_expected) {
        console.log(`1. Passed, ${t1} small bags`)
    } else console.log(`1.  Failed, expected answer: ${t1_expected} small bags`)

    if (t2 === t2_expected) {
        console.log(`2. Passed, ${t2} small bags`)
    } else console.log(`2. Failed, expected answer: ${t2_expected} small bags`)

    if (t3 === t3_expected) {
        console.log(`3. Passed, ${t3} small bags`)
    } else console.log(`3. Failed, expected answer: ${t3_expected} small bags`)

    if (t4 === t4_expected) {
        console.log(`4. Passed, ${t4} small bags`)
    } else console.log(`4. Failed, expected answer: ${t4_expected} small bags`)
}

let threatTest = (t1, t2, t3) => {
    console.log('------------------------')
    console.log('Does the array have consecutive numbers')
    console.log('------------------------')

    t1_expected = 'Has consecutive numbers'
    t2_expected = 'Does not have consecutive numbers'
    t3_expected = 'Has consecutive numbers'

    if (t1 === t1_expected) {
        console.log(`1. Passed, ${t1}`)
    } else console.log(`1. Failed, expected answer: ${t1_expected}`)

    if (t2 === t2_expected) {
        console.log(`2. Passed, ${t2}`)
    } else console.log(`2. Failed, expected answer: ${t2_expected}`)

    if (t3 === t3_expected) {
        console.log(`3. Passed, ${t3}`)
    } else console.log(`3. Failed, expected answer: ${t3_expected}`)
}

let objectProperties = (t1, t2, t3) => {
    console.log('------------------------')
    console.log('Are all properties equal')
    console.log('------------------------')

    t1_expected = true
    t2_expected = true
    t3_expected = false

    if (t1 === t1_expected) {
        console.log(`1. Passed, ${t1}`)
    } else console.log(`1. Failed, expected answer: ${t1_expected}, your answer: ${t1}`)

    if (t2 === t2_expected) {
        console.log(`2. Passed, ${t2}`)
    } else console.log(`2. Failed, expected answer: ${t2_expected}, your answer: ${t2}`)

    if (t3 === t3_expected) {
        console.log(`3. Passed, ${t3}`)
    } else console.log(`3. Failed, expected answer: ${t3_expected}, your answer: ${t3}`)
}

exports.tests = tests
exports.bracketTests = bracketTests
exports.packageTests = packageTests
exports.threatTest = threatTest
exports.objectProperties = objectProperties