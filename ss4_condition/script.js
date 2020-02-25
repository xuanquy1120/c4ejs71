let number = Number(prompt("nhập 1 số"));
let month = Number(prompt(""))
// if (number>8){
//     console.log("nó lớn hơn 8");
// }
// if(number<8){
//     console.log("nó bé hơn 8");    
// }
// if(number===8){
//     console.log("nó bằng 8");
// }
// if(number%2===0){
//     console.log("số chẵn");
// }
// else {
//     console.log("số lẻ");
// }

if(number%4===0&&number%100!==0){
    console.log("năm nhuận");
}
else {
    console.log("năm k nhuận");
    
}
switch (month){

    case 1:
    case 3:
    case 5:
        console.log(31);
        break;
    case 2:
        console.log("28 hoặc 29");
        break;
    case 4:
        console.log("30");
        break;
    default:
        console.log("nhập sai");
        
}
