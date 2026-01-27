// 只有在 C++、Java、Golang 这类语言中才提供了创建静态数组的方式，
// 类似 Python、JavaScript 这类语言并没有提供静态数组的定义方式

// 使用Array 类创建静态数组（模拟创建）
let arr = new Array(10);
console.log(arr); // [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined]
console.log(arr.length); // 10
console.log(arr[0]); // undefined

arr[0] = 1;
arr[1] = 5;
console.log(arr[0]); // 1
console.log(arr[1]); // 5

// 1、静态数组本质上是开辟了一块连续的内存空间，用于存储数组元素
// 所以，我们获得了数组的超能力「随机访问」：只要给定任何一个数组索引，O(1) 的时间内直接获取到对应元素的值。
// 成也乎焉，败也乎焉，数组连续内存的特性给他随机访问的超能力，也带来了很多的问题

// -------------各种方法操作---------

// 增（末尾增加） --- 时间复杂度为 O(1)
let arr1 = new Array(10);
for (let i = 0; i < 4; i++) {
  arr1[i] = i;
}
arr[4] = 4;
arr[5] = 5;


// 在中间增（insert） --- 时间复杂度为 O(N)  涉及到元素的搬迁
// 数组前四个已经有了值，在索引2(第三个元素)的位置插入一个新的元素999
let arr2 = new Array(10)
for (let index = 0; index < 4; index++) {
  arr2[index] = index;
}
for (let index = 4; index > 2; index--) {
    arr2[index] = arr2[index - 1]
}
arr2[2] =  999
console.log('arr2', arr2); // [ 0, 1, 999, 2, 3, <5 empty items> ]


// 数组满了 此时要新增（扩容）----涉及到新数组的开辟和赋值 时间复杂度为O(1)
// 注意： 连续内存必须一次性分配，分配完了之后就不能随意增减了，
// 只能重新申请一块更大的内存空间，把原来的数据复制过去，再插入新的元素，这就是数组的「扩容」操作
// 一个大小为10的数组，现在要增加索引为10的一个数据，数据为：66

let arr3 = new Array(10)
for (let index = 0; index < 10; index++) {
  arr3[index] = index;
}

let newArr3 = new Array(15)
for (let index = 0; index < 10; index++) {
  newArr3[index] = arr3[index];
}
newArr3[10] = 66
console.log('newArr3', newArr3);

// 删除

// 删除最后一个，将其设置为-1代表删除
// 有5个，删除最后一个   删除尾部元素本质上是一次随机访问，时间复杂度是O(1)
let arr4 = new Array(10)
for (let index = 0; index < 5; index++) {
  arr4[index] = index;
}
arr4[4] = -1;
console.log('arr4', arr4);

// 删除中间元素 ---- 涉及到了数据的搬移，时间复杂度为O(N)
// 大小为10的元素，删除第3个(索引为2)元素
let arr5 = new Array(10);
for (let index = 0; index < 5; index++) {
  arr5[index] = index;
}
// 0 , 1, 2, 3, 4
// for (let index = 4; index > 1 ; index--) {
//       arr5[index-1] = arr5[index]
//       // a3 =  a4
//       // a2 = a3
//       // a1 = a2
// }
// arr5[3] = -1;
// console.log('arr5', arr5);  // arr5 [ 0, 4, 4, -1, 4, <5 empty items> ] 明显不能从后往前，会覆盖，只能从前往后

for (let index = 2; index < 5; index++) {
  arr5[index] =  arr5[index+1]
}
// console.log('arr5', arr5);  // arr5 [ 0, 1, 3, 4, undefined, <5 empty items> ]
arr5[4] = -1
console.log('arr5', arr5);   // arr5 [ 0, 1, 3, 4, -1, <5 empty items> ]

// 查
// 给定指定索引，查询索引对应的元素的值，时间复杂度为O(1)

// 改
// 给定指定索引，修改索引对应的元素的值，时间复杂度为O(1)

