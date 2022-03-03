var arr2d = [[2, 5, 8],
[3, 6, 1],
[5, 7, 7]];

// We can console.log the `8` in this array if we
console.log(arr2d[0][2]);
// the first index `0` will select the `[2, 5, 8]` sub-array
// the second index `2` will select the `8` out of that sub-array


// complete the following function
function flatten(arr2d) {
    var flat = [];
    // your code here
    for (a = 0; a < 3; a++) {
        for (b = 0; b < 3; b++) {
            flat.push(arr2d[a][b]);
        }
    }
    return flat;
}

//Step 1: // Pseudocode here. This line flattens a 2D array into 1D.
// Step 2:   
var result = flatten([[2, 5, 8], [3, 6, 1], [5, 7, 7]]);
console.log(result); // we expect to get back [2, 5, 8, 3, 6, 1, 5, 7, 7]

