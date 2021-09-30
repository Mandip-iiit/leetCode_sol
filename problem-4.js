//finding bit length of an number..


var bitSize;
temp = 8463847412;
a = [];
while(temp>2){
    temp = temp/2;
    let remd = temp%2;
    a.push(remd);
}
a.push(temp);
bitSize = a.length;
console.log(bitSize);
