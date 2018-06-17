{

0 && 0 /* 0 */
0 && 1 /* 0 */
1 && 0 /* 0 */
1 && 1 /* 1 */

0 || 0 /* 0 */
0 || 1 /* 0 */
1 || 0 /* 0 */
1 || 1 /* 1 */

!1 /* false */
!0 /* true */

  /* && вернет 0 */
let zero = 0 && 1 && 2 && 3 && 4 && 5;
zero  /* 0 */

zero = 10 && 9 && 0 && 8 && 7 && 6;
zero  /* 0  */

let right = 10 && 9 && 8 && 7 && 6 && 5;
right /* 5 */


let left =  1 || 2 || 3 || 4 || 5 || 0;
left  /*  1 */

left =  0 || 0 || 0|| 0 || 5 || 0;
left   /*  5  */

left =  0 || 0 || 0|| 0 || 0 || 0;
left   /*  0  */

0 === '' 

  
  let a = 4;  /* 100 */
  let b = a << 2; /* 100 00 или 16 */
 
  let c = 1024; /* 10 000 000 000 */
  let d = c >> 8; /* 100 */
  
  let e = a & b; 
  /* &
  00 100  
  10 000 
  ------
  00 000 
  */
  
  let f = a | b; 
  /* |
  00 100  
  10 000 
  ------
  10 100 
  */
  
  let word =  12345;  //  0b011000000111001; 
  let key = 40831;    // 0b1001111101111111;  
  let cript = word ^ key; 
  /*  ^
              0b011000000111001
             0b1001111101111111
  44870  или 0b1010111101000110  
  */
  let uncript = cript ^ key;  /* 12345 */

  undefined == null  // true
  null == null   // true
  undefined == undefined // true
  undefined === null  // false
  null === null   // true
  undefined === undefined // true
  undefined == 0  // false
  undefined == false  // false
}

