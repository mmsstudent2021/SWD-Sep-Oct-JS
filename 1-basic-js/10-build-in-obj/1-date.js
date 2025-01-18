// Date class 
// console.dir(Date);
// static property , static method 
// console.dir(Date.name);
// console.log(Date.now());

// class => obj 
// const date = new Date()

// prototype method 
// console.log(date);
// console.log(typeof date);
// console.log(date.toString());
// console.log(typeof date.toString());

// to , get , set , constructor

// to => a twal lite u 
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toTimeString());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());

// get => ta khu chin u 
// console.log(date.getFullYear());

// const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(months[date.getMonth()]);

// console.log(date.getDate());

// const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log(days[date.getDay()]);

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());

// console.log(date.getTime());

// constructor => past, present, future 
// const date = new Date("2026-11-31")
// console.log(date);
// console.log(date.getMonth());
// console.log(date.getHours());

// set => time pyin lox ya twat chat lox ya
// const date = new Date()
// console.log(date);
// // ယခုကစပြီး နောက် နာရီ ၃၀၀ ဆိုရင်ဘယ်နေ့၊ ဘယ်အချိန်ဖြစ်မလဲ
// console.log(date.getHours() + 300);
// date.setHours(date.getHours() + 24)
// console.log(date);

// နောက်တစ်ကြိမ်သွေးလှူရမည့် date
// console.log(date.getMonth() + 4);
// date.setMonth(date.getMonth() + 4)
// console.log(date);

// 50 hr ပါဝင်တဲ့ SWD course ကို တစ်နေ့ ၂နာရီ အခုစပြီးလေ့လာရင်၊ ဘယ်နေ့ပြီးမလဲ။
// const courseHour = 50
// const learnHour = 2
// const learnDay = 50 / 2
// // console.log(learnDay);
// date.setDate(date.getDate() + learnDay)
// console.log(date);

const date = new Date("2024-12-31")
console.log(date.getDate() + 100);
date.setDate(date.getDate() + 100)
console.log(date);