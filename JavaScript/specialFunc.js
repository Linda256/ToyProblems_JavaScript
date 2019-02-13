/*
f(1)(2)(3);//9
f(2)(2)(1);//4
f(2,2,1); 4
f();//0
*/

//but a = 0. if(a) will be false; all the object return true. but numbers may return false if it is 0;
// function f(a,b,c){
//     if(a && b && c){
//         return (a+b)*c;
//     } 
//     else if(a && b){
//         return a+b;
//     }
//     else if(a){
//         return function(x){
//             return function(y){
//                 return (a+x)*y;
//             }
//         }
//     } else return 0;
// }

function f(a,b,c){
    if(arguments.length===0) return 0;
    if(b===undefined && c===undefined){
        return function(x){
            return function(y){
                return (a+x)*y;
            }
        }
        
    } 
    else if(c===undefined){
        return a+b;
    }
    else {
        return (a+b)*c;
    } 
}



console.log(f(1)(2)(3));//9
console.log(f(2)(2)(1));//4
console.log(f(2,2,1)); //4
console.log(f(0,1,3));//3
console.log(f());//0