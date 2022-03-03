function flatten(arr2d) {
    var flat = [];
    for (a = 0; a < arr2d.length; a++) { //              a = 0
        for (b = 0; b < arr2d[a].length; b++) { //       b = 0
            flat.push(arr2d[a][b]);                  // arr2d[1][0]
        }
    }
    return flat;
}

//arr2d.length
//arr2d[a].length

var arrayToFlatten = [[2, 5, 8], [3, 6, 1], [5, 7, 7], [5, 7, 7]];
//console.log(arrayToFlatten.length);
//console.log(arrayToFlatten[0].length);
console.log(flatten(arrayToFlatten));
