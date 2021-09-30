// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

//....................Example...................
// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// Input: x = 0
// Output: 0

var reverse = function(x) {
    
    if(x>0){
        
        str = x.toString();
        indx = str.length-1;

        str_arr = [];
        for (var i=0;i<=indx;i++){
            str_arr.push(str[i])
        }


        for(var i=0; i<indx; i++){

            temp = str_arr[i];
            str_arr[i] = str_arr[indx];
            str_arr[indx] = temp;
            indx--;
        };


        str = "";
        str_arr.forEach(element => {
            str = str+element;
        });
        var bitSize;
        temp = Number(str);
        a = [];
        while(temp>2){
            temp = temp/2;
            let remd = temp%2;
            a.push(remd);
        }
        a.push(temp);
        bitSize = a.length;
        
        if(bitSize<32){
            return Number(str);
        }else{return 0;};
    }
    if(x == 0){
       return 0;
    }else{
        str = x.toString();
        indx = str.length-1;

        str_arr = [];
        for (var i=1;i<=indx;i++){
            str_arr.push(str[i])
        }


        let str_ar_ind = str_arr.length-1

        for(var i=0; i<str_ar_ind; i++){

            temp = str_arr[i];
            str_arr[i] = str_arr[str_ar_ind];
            str_arr[str_ar_ind] = temp;
            str_ar_ind--;
        };

        str = "";
        str_arr.forEach(element => {
            str = str+element;
        });
              
        var bitSize;
        temp = Number(str);
        a = [];
        while(temp>2){
            temp = temp/2;
            let remd = temp%2;
            a.push(remd);
        }
        a.push(temp);
        bitSize = a.length;
        
        if(bitSize<32){
            new_str = "-"+str;
            return Number(new_str);
        }else{return 0;};
    }
    
};