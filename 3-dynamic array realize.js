// 1、自动扩容、缩容    达到静态数组上限扩容x2  缩减大原来的1/4缩容到1/2
// 2、索引越界检查
// 3、删除元素谨防内存泄漏

class MyArrayList {
  constructor(initCapacity) {
      // 真正存储数据的底层数组
      this.data = [];
      // 记录当前元素个数
      this.size = 0;
      // 默认初始容量
      this.INIT_CAP = 1; //FIXME: 为0是不合适的，为1才合适
      // 初始化
      this.init(initCapacity);
  }

  init(initCapacity) {
      const capacity = initCapacity || this.INIT_CAP;
      this.data = new Array(capacity);
      this.size = 0;
  }

  // 末尾增
  addLast(e) {
      const cap = this.data.length;
      // 看 data 数组容量够不够
      if (this.size === cap) {
          this.resize(2 * cap);
      }
      // 在尾部插入元素
      this.data[this.size] = e;
      this.size++;
  }

  add(index, e) {
      // 检查索引越界
      this.checkPositionIndex(index);

      const cap = this.data.length;
      // 看 data 数组容量够不够
      if (this.size === cap) {
          this.resize(2 * cap);
      }

      // 搬移数据 data[index..] -> data[index+1..]
      // 给新元素腾出位置
      for (let i = this.size - 1; i >= index; i--) {
          this.data[i + 1] = this.data[i];
      }

      // 插入新元素
      this.data[index] = e;

      this.size++;
  }

  addFirst(e) {
      this.add(0, e);
  }

  // 删
  removeLast() {
      if (this.size === 0) {
          throw new Error("NoSuchElementException");
      }
      const cap = this.data.length;
      // 可以缩容，节约空间
      if (this.size === Math.floor(cap / 4)) {
          this.resize(Math.floor(cap / 2));
      }

      const deletedVal = this.data[this.size - 1];
      // 删除最后一个元素
      // 必须给最后一个元素置为 null，否则会内存泄漏
      this.data[this.size - 1] = null;
      this.size--;

      return deletedVal;
  }

  remove(index) {
      // 检查索引越界
      this.checkElementIndex(index);

      const cap = this.data.length;
      // 可以缩容，节约空间
      if (this.size === Math.floor(cap / 4)) {
          this.resize(Math.floor(cap / 2));
      }

      const deletedVal = this.data[index];

      // 搬移数据 data[index+1..] -> data[index..]
      for (let i = index + 1; i < this.size; i++) {
          this.data[i - 1] = this.data[i];
          // a3 = a4
          // a4 = a5
      }

      this.data[this.size - 1] = null;
      this.size--;

      return deletedVal;
  }

  removeFirst() {
      return this.remove(0);
  }

  // 查
  get(index) {
      // 检查索引越界
      this.checkElementIndex(index);

      return this.data[index];
  }

  // 改
  set(index, element) {
      // 检查索引越界
      this.checkElementIndex(index);
      // 修改数据
      const oldVal = this.data[index];
      this.data[index] = element;
      return oldVal;
  }

  // 工具方法
  getSize() {
      return this.size;
  }

  isEmpty() {
      return this.size === 0;
  }

  // 将 data 的容量改为 newCap
  resize(newCap) {
      const temp = new Array(newCap);

      for (let i = 0; i < this.size; i++) {
          temp[i] = this.data[i];
      }

      this.data = temp;
  }

  isElementIndex(index) {
      return index >= 0 && index < this.size;
  }

  isPositionIndex(index) {
      return index >= 0 && index <= this.size;
  }

  // 检查 index 索引位置是否可以存在元素
  checkElementIndex(index) {
      if (!this.isElementIndex(index)) {
          throw new Error("Index: " + index + ", Size: " + this.size);
      }
  }

  // 检查 index 索引位置是否可以添加元素
  checkPositionIndex(index) {
      if (!this.isPositionIndex(index)) {
          throw new Error("Index: " + index + ", Size: " + this.size);
      }
  }

  display() {
      console.log("size = " + this.size + " cap = " + this.data.length);
      console.log(this.data);
  }
}

// 初始容量设置为 3
const arr = new MyArrayList(3);

// 添加 5 个元素
for (let i = 1; i <= 5; i++) {
  arr.addLast(i);
}

arr.remove(3);
arr.add(1, 9);
arr.addFirst(100);
const val = arr.removeLast();

// 100 1 9 2 3
for (let i = 0; i < arr.getSize(); i++) {
  console.log(arr.get(i));
}