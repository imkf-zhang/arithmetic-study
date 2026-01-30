// for (var i = 1; i <= 5; i++) {
//   // let j = i;
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
// }


for (var i = 1; i <= 5; i++) {
  let j = i;
  setTimeout(() => {
    console.log(j);
  }, 1000 * j);
}