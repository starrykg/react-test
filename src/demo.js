let arr = ["jessie", "kevin", "jack"];


//数组map(箭头函数):会自动获取数据的每个元素,然后使用箭头函数进行处理,把处理结果放到新的数组中 作为最终的返回值
let newArr = arr.map((item, index) => {
    return item.toUpperCase();
});


console.log(newArr);
console.log(arr);



