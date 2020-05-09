// let arr = [2,3,5,7,9,3,2,6,1];

// let r1 =arr.findIndex(function(v,i,a){
//     // console.log(`v = ${v}`)
//     // console.log(`i = ${i}`)
//     // console.log(`a = ${a}`)
//     return v>4;
// });
// console.log(`r1=${r1}`)
// let r2 =arr.findIndex(function(v,i,a){
//     // console.log(`v = ${v}`)
//     // console.log(`i = ${i}`)
//     // console.log(`a = ${a}`)
//     return v>4;
// });
// console.log(`r2=${r2}`)
// let r3 =arr.filter(function(v,i,a){
//     // console.log(`v = ${v}`)
//     // console.log(`i = ${i}`)
//     // console.log(`a = ${a}`)
//     return v>4;
// });
// console.log(`r3=${r3}`)
// console.log(r3)

// let r4 = arr.every(function(v){
//     return v%2 === 0;
// });
// console.log(`r4=${r4}`)

// let r5 = arr.some(function(v){
//     return v%2 === 0;
// })
// console.log(`r5=${r5}`)

let listPhone = [
    {
        name: "Galaxy note",
        price: 10e6,
        brand: "samsung"
    },

    {
        name: "xperia 1",
        price: 11e6,
        brand: "sony"
    },
    {
        name: "iPhone 11",
        price: 19e6,
        brand: "apple"
    }
];

let r1 = listPhone.find(function (v, i, a) {
    // console.log(`v = ${v}`)
    // console.log(`i = ${i}`)
    // console.log(`a = ${a}`)
    return v.price > 10e6 && v.price < 12e6;
})
console.log(r1)

let r2 = listPhone.filter(function (v, i, a) {
    return v.brand ==="samsung";
})
console.log(r2)

let r3 = listPhone.filter(function (v, i, a) {
    return v.price>12e6;
})
console.log(r3)

let r4 = listPhone.filter(function (phone) {
    return phone.brand.toLowerCase()=== 'samsung';
})
console.log(r4)
let r5 = listPhone.filter(function (phone) {
    return phone.name.toLowerCase().includes('a');
})
console.log(r5)
let r6 = listPhone.filter(function (phone) {
    return phone.brand.toLowerCase()==='apple' && phone.price<20e6;
})
console.log(r6)