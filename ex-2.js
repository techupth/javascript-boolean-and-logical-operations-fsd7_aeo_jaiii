// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000;
let isWeekday;
let hasBoughtProductFromITCategory;
let hasAttendedDiscountEvent;
let isPlatinum;

let hasPromotion;

/*ชื่อว่า John มีคุณสมบัติดังนี้

-มียอดสั่งซื้อเดือนที่แล้ว 4001 บาท
-ไปซื้อของวันศุกร์
-ไม่เคยซื้อของในหมวดหมู่ IT มาก่อน
-เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
-เป็น Member ระดับ Gold */

lastMonthPaidMoreThan4000 = true;           //เกิน 4000
isWeekday=true;                             //ซื้อวันศุกร์ 
hasBoughtProductFromITCategory= false;      // ไม่เคยซื้อ
hasAttendedDiscountEvent= true;             // เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
isPlatinum= false;                          // ระดับ Gold 

hasPromotion = (lastMonthPaidMoreThan4000 && isWeekday && hasBoughtProductFromITCategory && (!hasAttendedDiscountEvent))|| (isPlatinum)

console.log(hasPromotion);                  // ไม่ได้เพราะ เคยเข้าร่วมกิจกรรมมหกรรมลดราคาครั้งที่ 2
