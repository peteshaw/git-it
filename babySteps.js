
//console.log(process.argv);
var args = process.argv;
var i = 0;
var sum = 0;

for (i in args) {
    if (!isNaN(args[i])) 
        {
            sum += Number(args[i]);
            //console.log(args[i]);
        }
}
console.log(sum);