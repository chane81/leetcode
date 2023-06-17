/**
 * @param {any} o1
 * @param {any} o2
 * @return {boolean}
 */
var areDeeplyEqual = function(o1, o2) {
    const strO1 = JSON.stringify(o1, helper);
    const strO2 = JSON.stringify(o2, helper);   

    return strO1 === strO2;
};

function helper(key, value) {
    if (value && typeof value === "object" && !Array.isArray(value))
        return Object.fromEntries(Object.entries(value).sort());
    else
        return value;
}