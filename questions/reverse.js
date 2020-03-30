// Create a function to reverse a string

/*
    reverse('Hello, world!'); // !dlrow ,olleH
*/

function reverse(str) {
    return str.split('').reverse().join('');
}

should(
    'Should reverse "abc" return "cba" -',
    reverse,
    'abc',
    'cba'
);

should(
    'Should reverse "" empty string',
    reverse,
    '',
    ''
);

should(
    'Should reverse "Longer than expected text!"',
    reverse,
    "Longer than expected text!",
    "!txet detcepxe naht regnoL"
);

function should(testTitle, functionToTest, arguments, expectedResult) {
    const result = functionToTest(arguments);

    if (result === expectedResult) {
        console.log('pass');
    } else {
        console.log('fail');
    }
}
