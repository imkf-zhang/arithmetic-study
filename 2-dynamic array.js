// 动态数组是不可能解决静态数组在中间增删元素效率差的问题------连续的内存空间，
// 不可避免的会有这个问题
// 动态数组底层还是静态数组，自动会帮开发人员进行数组扩容、缩容，并把增删改找操作进行了封装

// js中经常使用的数组就是动态数组

let arr = [];
for (let index = 0; index < 10; index++) {
 arr.push(index)
}
arr.splice(2, 0, 99)
// console.log(arr)
arr.unshift(-1)
console.log(arr)
arr.pop()
console.log(arr)