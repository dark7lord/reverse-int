const reverse = (n) => {
    const result = Math.abs(n)
        .toString()
        .split('')
        .reverse()
        .join('');
    
    return Number(result);
}

module.exports = reverse;
