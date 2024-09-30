let isOver18;
let hasCriminalBlacklist;

let isAllow;

// Start coding here

/*ผู้เข้าร่วมงานต้องมีอายุมากกว่า 18 ปีขึ้นไป
และต้องไม่เคยมีประวัติอาชญากรรมมาก่อน */

/*ผู้ร่วมงานคนหนึ่งชื่อว่า James มีคุณสมบัติดังนี้
- James มีอายุ 18 ปี
- James ไม่เคยมีประวัติอาชญากรรม */

//Reassign
isOver18= true; 
hasCriminalBlacklist=false

isAllow= isOver18 && !hasCriminalBlacklist

console.log(isAllow);       // มีสิทธิ์เข้างาน
