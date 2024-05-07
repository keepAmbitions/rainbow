// console.log(100)
// setTimeout(() => {
//     console.log(200)
// })
// Promise.resolve().then(() => {
//     console.log(300)
// })
// async function async1() {
//     console.log(400)
//     await async2()
// }
// async function async2() {
//     console.log(500)
// }
// async1()

// 100
// 400
// 500
// 300
// 200
console.log(100)
setTimeout(() => {
    console.log(200)
})
async function async1() {
    await async2()
    console.log(400)
}
async function async2() {
    console.log(500)
}
Promise.resolve().then(() => {
    console.log(300)
})
async1()

// 100
// 500
// 400
// 300
// 200