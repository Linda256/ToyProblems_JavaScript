/*
f(1)(2)(3);//9
f(2)(2)(1);//4
f(2,2,1); 4
f();//0
*/

function f(a,b,c){
    if(a & b & c){
        return (a+b)*c;
    } 
    else if(a & b){
        return a+b;
    }
    else if(a){
        return function(x){
            return function(y){
                return (a+x)*y;
            }
        }
    } else return 0;
}
