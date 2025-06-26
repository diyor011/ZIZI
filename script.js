// let arraynumber = [2, 4, 6, 8, 10, 12, 14, 50, 100]
// let juftarr = []



// for (let i = 0; i < arraynumber.length; i++)  {
//     console.log(arraynumber[i]);
//     if (arraynumber [1] % 2 == 0) {
//         juftarr.push(arraynumber[i])
//     }
    
// }


// Tasodifiy sonlardan iborat array yaratish (8 ta son)

let arr = [];
for (let i = 0; i < 8; i++) {
  arr.push(Math.floor(Math.random() * 100)); // 0 dan 99 gacha
}
console.log(arr, 'boshlanishdagi array');

// Juft sonlarni ajratib olish
let juftlar = arr.filter(function(son) {
  return son % 2 === 0;
});
console.log(juftlar, 'juft sonlarga ajratilgan array');


