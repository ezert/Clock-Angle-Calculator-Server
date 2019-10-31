const calc = (higher, lower) => {

    higher -= lower;

    if (higher > 30) {
        return (60 - higher)*6 + '°';
    }
    
    return higher * 6 + '°';

}

module.exports = (h, min) => {

    if (h == min) {
        return '0°';
    }

    if (h > min) {
        return calc(h, min);
    }

    return calc(min, h);

}