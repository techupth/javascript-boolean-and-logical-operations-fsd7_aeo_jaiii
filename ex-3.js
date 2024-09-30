//Exercise #3: Debugging (Boolean & Logical Operations)

//Start coding here
let numberA = 100;          //แก้เป็น let เพราะ const จะ reassign ไม่ได้
let numberB = "20";         //แก้เป็น let เพราะ const จะ reassign ไม่ได้ เนื่องจากจะเอาไปแปลงเป็น Number

numberA = 10;
numberB = Number(numberB);  //แปลงเป็น Number

console.log(`Sum: ${numberA + numberB}`);
