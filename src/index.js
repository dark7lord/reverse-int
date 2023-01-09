const reverse = (n) => {
    const result = Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('');
    
    return Number(result);
}
console.log(reverse(-19))
module.exports = reverse;
