const reverse = (n) => {
    const result = n
        .toString()
        .split('')
        .reverse()
        .join('');
    
    return Number(result);
}

module.exports = reverse;
