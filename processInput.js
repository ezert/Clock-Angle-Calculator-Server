const validate = require(validateInput);
const error = require(errorMessage);

module.exports = ((h, min) => {

    if (!validate.type(h) || !validate.type(min)) {
        return error('only unsigned integers are accepted.');
    }

    h = validate.hourFormat(h);

    min = !min ? 0 : min;

    if (!validate.size(h) || !validate.size(min)) {
        return error('hour must be smaller than 24 and minutes must be smaller than 60.');
    }

    return calc(h, min);

})()

//OBS: dividir cálculos das validações.