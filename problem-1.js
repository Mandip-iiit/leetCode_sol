// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct. Your goal is to form arr by concatenating the arrays in pieces in any order. However, you are not allowed to reorder the integers in each array pieces[i].

// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

//................EXAMPLE...............

// Input: arr = [85], pieces = [[85]]
// Output: true

// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]

// Input: arr = [49,18,16], pieces = [[16,18,49]]
// Output: false
// Explanation: Even though the numbers match, we cannot reorder pieces[0].

// Input: arr = [91,4,64,78], pieces = [[78],[4,64],[91]]
// Output: true
// Explanation: Concatenate [91] then [4,64] then [78]

// Input: arr = [1,3,5,7], pieces = [[2,4,6,8]]
// Output: false

arr = [1,3,5,7], pieces = [[2,4,6,8]]

var canFormArray = function(arr, pieces) {

    var answer = true;

    pieces.forEach(itm => {
        
        if (Array.isArray(itm) & itm.length==1){
    
            var valid = false;
            for(var a=0;a<arr.length;a++){
                if(arr[a]== itm[0]){
                    valid = true;
                    break;
                }
            }
            if(valid == false){
                answer = false;
                // return false;
            }
        }
        else if(Array.isArray(itm) & itm.length>1){
            
            var valid_2 = false;
            for(var b=0;b<arr.length;b++){
                if(arr[b]==itm[0]){

                    let new_indx = b;

                    for(var elm=0;elm<itm.length;elm++){

                        if(arr[new_indx]==itm[elm]){
                            new_indx = new_indx+1;
                            
                        }else{
                            
                            answer = false;
                            break;
                            // return false;
                        }
                    }

                    valid_2 = true;
                }
            }
            if(valid_2 == false){
                answer = false
                // return false;
            }
        }else{
            answer = false;
            // return false;
        }
    });

    return answer;
};

console.log(canFormArray (arr,pieces));