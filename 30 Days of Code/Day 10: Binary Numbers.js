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
    var n = parseInt(readLine());
    var quotient = n;
    var binary = "";
    var maxConsecutive = 0;
    var consecutive = 0;
    var lastwasone = false;
    while(n > 0){
        var remainder = (n % 2);
        
        if(remainder === 1){
       
            consecutive++;
                    
            if(consecutive > maxConsecutive){
                maxConsecutive = consecutive; 
            }
            
        } else {
            consecutive = 0;
        }
        
        binary =  remainder + binary;
        n = Math.floor(n/2);
    }
    
    console.log(maxConsecutive);
}
