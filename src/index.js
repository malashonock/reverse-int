module.exports = function reverse(n) {
    let digit = 0;
    let reversedNumber = 0;

    n = Math.abs(n);

    while (n) {
        digit = n % 10;
        reversedNumber = reversedNumber * 10 + digit;
        n = Math.floor(n / 10);
    }
    
    return reversedNumber;
}
