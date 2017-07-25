function processData(input) {
    _input_array = input.split('\n');
    var n = parseInt(_input_array[0]);
    var searchSize = _input_array.length - parseInt(n);
    var phoneBook = {};
    
    for(i = 1; i <= n; i++){
        var info = _input_array[i].split(' ');
        phoneBook[info[0]] = info[1];
    }
    
    for(y = 1; y < searchSize; y++){
        var name = _input_array[y + n];
        if(phoneBook.hasOwnProperty(name)){
            console.log(name + '=' + phoneBook[name]);  
        } else {
            console.log('Not found');
        }
    }
   
    
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
