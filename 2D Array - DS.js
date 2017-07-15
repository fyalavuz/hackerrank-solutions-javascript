process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var arr = [];
    
    for(arr_i = 0; arr_i < 6; arr_i++){
       arr[arr_i] = readLine().split(' ');
       arr[arr_i] = arr[arr_i].map(Number);
    }

    var sums = [];
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 6; y++) {
            if (x + 2 < 6 && y + 2 < 6) {
                var firstLine = arr[x][y] + arr[x][y+1] + arr[x][y+2]
                var secondLine = arr[x+1][y+1];
                var thirdLine = arr[x+2][y] + arr[x+2][y+1] + arr[x+2][y+2]
                sums.push(parseInt(firstLine) + parseInt(secondLine) + parseInt(thirdLine));    
            }
            
        }
    }
    
    process.stdout.write(Math.max.apply(Math, sums) + '');
}
