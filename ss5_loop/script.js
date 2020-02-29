// for (let index = 0; index < 10; index+=2) {

//     console.log(index);
// }
// for (let index = 1; index < 10; index+=2) {
//     console.log(index);
// }
// for (let index = 10; index > 0; index--) {
//     console.log(index);  
// }
// console.log("nhập hai số m và n");

// let m=Number(prompt());
// let n=Number(prompt());

// if(m<n){
//     for(m;m<n;m++){
//         console.log(m);
//     }
// }
// else if(m>n){
//     for(n;n<m;n++){
//         console.log(n);
//     }   
// }
// else{
//     console.log(m);
    
// }
// a=(m<=n?m:n)
// let a=Math.min(m,n);
// let b=Math.max(m,n);
//     for(a;a<b;a++){
//         console.log(a);
//     }
// console.log("nhập n");
// let n=Number(prompt());
// let s=0;
// let s1=0;
// let s2=0;
// let s4=0;
// let s5=0;
// let s6=0;
// let s7=1;
// let s8=0;

// for(let i=0;i<=n;i++){
//     s+=i;    
// }
// console.log(s);

// for(let i=0;i<=n;i+=2){
//     s1+=i;    
// }
// console.log(s1);

// for(let i=1;i<=n;i+=2){
//     s2+=i;    
// }
// console.log(s2);

// for(let i=1;i<=n;i++){
//     s4+=(1/i);    
// }
// console.log(s4);

// for(let i=1;i<=n;i++){
//     s5+=(1/((i+1)*i));    
// }
// console.log(s5);

// for(let i=0;i<=n;i++){
//     s6+=(i/(i+1));    
// }
// console.log(s6);

// for(let i=1;i<=n;i++){
//     s7*=i;    
// }
// console.log(s7);


// for(let i=1;i<=n;i++){
//     let a=1;
//     for(let j=1;j<=i;j++){
//         a*=j;
//     }
//     s8+=a;
// }
// console.log(s8);
// let txt=(prompt("nhập mật khẩu"));
// let sln=txt.length;
// while (sln<8){
//     txt=(prompt("nhập lại mật khẩu"));
// }

// let n=Number(prompt("nhập 1 số"));
// while(!(n>10 && n%2===0)){
//     n=Number(prompt("nhập sai nhập lại :"))
// }
// console.log(n);

let txt=(prompt("nhập một chuỗi"));
let sln=txt.length;


while (!(sln>8 && txt.search("@")>=0)){
    txt=(prompt("nhập lại mật khẩu"));
}

