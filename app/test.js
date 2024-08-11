const people = [
    {name:'Daniel', age: 14, gender: 'MALE'}, 
    {name:'Alice', age: 13, gender: 'FEMALE'}, 
    {name:'Jack', age: 12, gender: 'MALE'}, 
    {name:'Ivy', age: 15, gender: 'FEMALE'}, 
  ]
  
  // 实现两个函数，函数的入参是数组
  // 1. 求所有男性的年龄平均值 
  
  // 2. 根据年龄，返回从大到小排序的数组

//   function pj(arr) {
//     let arr2 = []
//     arr.forEach(item=>{
//         if (item.gender==='MALE') {
//             arr2.push(item.age)
//         }
//     })
//     console.log();
//     return arr2.reduce((sum, curr)=> {
//        return sum += curr
//     }, 0)/ arr2.length
//   }
//  console.log( pj(people));

 function newSort(arr) {
    const newArr = [...arr]
    newArr.sort((a, b) => {
        return b.age - a.age
    })
    return newArr
 }
 console.log(newSort(people));