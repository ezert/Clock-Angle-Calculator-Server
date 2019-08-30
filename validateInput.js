
module.exports = {

    type : (n) => {
        return Number.isInteger(n) && n >= 0;
    },

    size : (n) => {
        return n < 60;
    },

    hourFormat : (h) => {
        return h < 12 ? h * 5 : (h - 12) * 5;
    }

}