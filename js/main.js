"use strict";


// ======================================== switch case ======================================== //

//====== 1-misol ======//

// let day = +prompt("Hafta kuni (1-7): ");

// switch (day) {
//    case 1:
//     alert("Dushanba");
//      break;

//    case 2:
//     alert("seshanba");
//      break;

//    case 3:
//     alert("CHorshanba");
//      break;

//    case 4:
//     alert("Payshanba");
//      break;

//    case 5:
//     alert("Juma");
//      break;

//    case 6:
//     alert("Shanba");
//      break;

//    case 7:
//     alert("Yakshanba");
//      break;

//    default:
//       alert("Bunday kun yo`q");
// }

//====== 2-misol ======//
// let baho = +prompt(" 5 ballik baho natijalari (K): ");

//   switch (baho) {
//       case 1:
//         alert("Yomon");
//           break;

//       case 2:
//         alert("Qoniqarsiz");
//           break;

//       case 3:
//         alert("qoniqarli");
//           break;

//       case 4:
//         alert("Yaxshi");
//           break;

//       case 5:
//         alert("Alo");
//           break;

//       default:
//         alert("bunday baxoloash tizimi yo`q")
//   }

//====== 3-masala ======//
// let season = +prompt(" fasillarni raqamda kiriting kiritin: ");

// switch (season) {
//        case 1:
//           alert("Bahor");
//             break;

//         case 2:
//           alert("Bahor");
//             break;

//         case 3:
//           alert("Bahor");
//             break;

//         case 4:
//           alert("Yoz");
//             break;
    
//         case 5:
//           alert("Yoz");
//             break;
    
//         case 6:
//           alert("Yoz");
//             break;

//         case 7:
//           alert("Kuz");
//             break;
    
//         case 8:
//           alert("Kuz");
//             break;
    
//         case 9:
//           alert("Kuz");
//             break;

//         case 10:
//           alert("Qish");
//             break;
        
//         case 11:
//           alert("Qish");
//             break;
        
//         case 12:
//           alert("Qish");
//             break;
//         default:
//           alert("bunday fasil yo`q");
// }

//====== 4-masala ======//
// let season = +prompt(" oyda necha kun bor: ");

// switch (season) {
//        case 1:
//           alert("31");
//             break;

//         case 2:
//           alert("30");
//             break;

//         case 3:
//           alert("31");
//             break;

//         case 4:
//           alert("30");
//             break;
    
//         case 5:
//           alert("30");
//             break;
    
//         case 6:
//           alert("31");
//             break;

//         case 7:
//           alert("30");
//             break;
    
//         case 8:
//           alert("31");
//             break;
    
//         case 9:
//           alert("30");
//             break;

//         case 10:
//           alert("31");
//             break;
        
//         case 11:
//           alert("31");
//             break;
        
//         case 12:
//           alert("28");
//             break;

//         default:
//           alert("bunday oy y`oq");
// }

//====== 5-masala ======//
// let amal = +prompt(" amalni kiriting: ");
// let a = +prompt("sonni kiriting");
// let b = +prompt("sonni kiriting");

//     switch (amal) {
//       case "*":
//         alert(a * b);
//           break;

//       case "/":
//         alert(a / b);
//           break;

//       case "-":
//         alert(a - b);
//           break;

//       case "+":
//         alert(a + b);
//           break;

//       default:
//         alert("bunday amal topilmadi");
// }

//====== 6-masala ======//
// let baholash = +prompt(" nechi baho oldingiz: ");

//     switch (baholash) {
//       case 1:
//         alert("10$ stipendiya");
//           break;

//       case 2:
//         alert("20$ stipendiya");
//           break;

//       case 3:
//         alert("30$ stipendiya");
//           break;

//       case 4:
//         alert("40$ stipendiya");
//           break;

//       case 5:
//         alert("50$ stipendiya");
//           break;

//       default:
//         alert(" bunday baho yo`q ");
//           break;
// }


// ======================================== for console.log ======================================== //

//====== 1-masala ======//
//  let k = 10;
//  let n = 6;

//   for (let i = 0; i < n; i++ ){
//      console.log(k);
// }

//====== 2-masala ======//
// let a = 10;
// let b = 6;

// let length = a - b;

//   for (let i = a; i >= b; i--){
//     console.log(i);
// }

//====== 3-masala ======//
// let a = 10;
// let b = 6;

//   for (let i = a -1; i >= b +1; i--){
//     console.log(i);
// }

//====== 4-masala ======//
// for(let i=1 ; i<=10; i++){
//   console.log(i+"kg",  i*10000,"so'm");
// }

//====== 5-masala ======//
// for(let i=1 ; i<=10; i++){
//   console.log(i/10+"kg", i*1000,"so'm");
// }

//====== 6-masala ======//
// for(let i=10 ; i<=20; i+=2){
//   console.log(i/10+"kg", i*1000,"so'm");
// }

//====== 7-masala ======//
// let yiguvchi = 0;
// let a = +prompt("a Son kiriting: ");
// let b = +prompt("b Son kiriting: ");

//   for (let i = a; i <= b; i++) {
//     yiguvchi = yiguvchi +i; 
//  }
//   console.log(yiguvchi);

//====== 8-masala ======//
  // let yiguvchi=1;
  // let a = +prompt(" a sonini kiriting: ");
  // let b = +prompt(" b sonini kiriting: ");

  //   for(let i=a; i<=b; i++){
  //     yiguvchi*=i;
  // }
  //   console.log(yiguvchi);

  //====== 9-masala ======//
//   let a = +prompt(" a sonini kiriting ");
//   let b = +prompt(" b sonini kiriting ");
//   let yiguvchi = 0;

//     for (i = a; i <= b; i++){
//       let kvadratiga = Math.pow(i,2)
//       yiguvchi += kvadratiga;
// }
//   console.log(yiguvchi);

//====== 10-masala ======//
//   let son = +prompt("enter number:");
//   let numbers = 0;

//   for (let i = 1; i <= son; i++) {
//     let n = 1 / i;
//     numbers = numbers + n;
//  }
//   console.log(numbers);

//====== 11-masala ======//
// let n = +prompt(" n sonini kiriting ");

//   for (i = 1; i <= n; i +=2){
//     console.log(i)
// }

//====== 12-masala ======//
// let n = +prompt(" n sonini kiriting ");

//   for (i = 1; i <= n; i += 2){
//     console.log(i)
// }

//====== 13-masala ======//
// let number = +prompt(" soni kiriting ");

//   for (let i = 1; i <= number; i++){
//     console.log(i)
//   }

//====== 14-masala ======//
// let number = +prompt(" soni kiriting ");

//   for (let i = 1; i <= number; i++){
//     if(i % 2==0){
//       console.log(i**2,"juft");
//     }else{
//       console.log(i**2, "toq");
//     }
//   }

//====== 15-masala ======//
// let number = +prompt(" sonni kiriting ");

//   for (let i = number; i >= 0; i--){
//     console.log(i);
// }

//====== 16-masala ======//
// let number = +prompt(" sonni kiriting ");

//   for (let i = 0; i <= number; i++){
//     i % 5 == 0 ? console.log() : console.log(i);
// }

//====== 17-masala ======//
//   let n =+prompt("enter number: ");
//   let yiguvchi = 1;

//     for (let i = 1; i <= n; i++) {
//       yiguvchi *= i;
//  }
//     console.log(yiguvchi);

//====== 20-masala ======//
//   let n=+prompt("Son kiriting: ");
//   let x=+prompt("Shu songa bo'linadi: ");

//     for(let i=1; i<=n; i++){
//       if(i % x==0)
//     console.log(i);
// }
