// complete the function
function solution(string) {
    let a = string.split("");
    let e = [];
    let x = 0;
        for (let i=0; i<string.length; i++) {
          for (let j=65; j<90; j++) {
              if(string[i] == String.fromCharCode(j)) {
                a.splice(i, 0, ' ');
                e = a;
              }
          }
        }
                a = string.split("");
    
        console.log(e.join("").toString());
        return e.join("");
        /*let res = [];
        
        while() {
        
        }
       for (let k=0; k<a.length; k++) {
           res = string.split(a[k]);
           if (res.length > 1) {
              
           }
       }*/
    }
    