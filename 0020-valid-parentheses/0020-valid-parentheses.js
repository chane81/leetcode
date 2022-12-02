/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // {[]}
    // ()[]{}
    const wrapperMap = new Map();
    wrapperMap.set('(', ')');
    wrapperMap.set('{', '}');
    wrapperMap.set('[', ']');
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        const char = wrapperMap.get(s[i]);

        // open 이면 stack에 push
        if (char) {
            stack.push(char);
        } 
        // close 이면 stack값과 비교해서 있으면 pop
        else if (stack[stack.length - 1] === s[i]) {
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length === 0;
};