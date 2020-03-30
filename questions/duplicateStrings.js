// Create a function that takes a string and returns a
// new string with duplicates removed

/*
 const str = 'This is is a test test string';
 removeDuplicates(str); // 'This is a test string'
 */

// function removeDuplicates(str) {
//     return Object.keys(str.split(' ').reduce((acc, cur) => {
//         acc[cur] = cur;
//
//         return acc;
//     }, {})).join(' ');
// }

console.log(removeDuplicates('This is is a test test string '));

// function removeDuplicates(str) {
//     return str.split(' ').reduce((acc, currentWord) => {
//        if (!acc.indexOf(currentWord) > -1) {
//            acc.push(currentWord);
//        }
//
//        return acc;
//     }, []).join(' ');
// }


function removeDuplicates(str) {
    return [...new Set(str.split(' '))].join(' ');
}
