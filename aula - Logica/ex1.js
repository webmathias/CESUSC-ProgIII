const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let tests;
let line = 0;
const isPalindrome = (num) => {
    let txt = num + '';
    for (let i = 0; i < txt.length / 2; i++) {
        if (txt[i] != txt[txt.length - i-1]){
            return false
        }
    }
    return true;
}
rl.on('line', (input) => {
    line++;
    if (line == 1) {
        tests = input
    } else {
        let num = parseInt(input)+1;
        while(!isPalindrome(num)){
            num++
        }
        console.log(num);
    }
});