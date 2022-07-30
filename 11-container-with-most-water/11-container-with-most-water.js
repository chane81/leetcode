var maxArea = function(height) {
    let start = 0
    let end = height.length-1
    
    let max = 0
    
    while (start < end) {
        const minHeight =  Math.min(height[start], height[end]);
        const water = minHeight * (end - start);
        
        max = water > max ? water : max;
        
        if (height[start] > height[end]) --end;
        else ++start;
    }

    return max;
};