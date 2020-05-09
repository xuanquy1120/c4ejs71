// let myInfo = {
//   "name": "quy",
//   'age': 20,
//   'country': 'Vietnam',
// };
// console.log(myInfo);
// myInfo['phone'] = '0349593356';//thêm
// myInfo.school = 'DH TLU'; // thêm
// myInfo.age = 21; // sửa
// delete myInfo.country; // xóa
// for (const key in myInfo) {
//   if (myInfo.hasOwnProperty(key)) {
//     const element = myInfo[key];
//     console.log(key + " : " + element);

//   }
// }

// let phone = {
//   'name': 'iphone 6splus',
//   'price': 6e6,
//   'brand': 'apple',
// };
// for (const key in phone) {
//   if (phone.hasOwnProperty(key)) {
//     const element = phone[key];
//     console.log(key + " : " + element);
//   }
// }

// let editkey = prompt("bạn muốn sửa gì");
// while (!phone.hasOwnProperty(editkey)) {
//   editkey = prompt("gái trị mới");
// }
// phone[editkey] = prompt("giá trị mới")

// let removekey = prompt("bạn muốn xóa gì");
// while (!phone.hasOwnProperty(removekey)) {
//   removekey = prompt("gái trị mới");
// }
// delete phone[removekey];

// for (const key in phone) {
//   if (phone.hasOwnProperty(key)) {
//     const element = phone[key];
//     console.log(key + " : " + element);
//   }
// }


// gia tri tuyet doi
// toan tu 1 ? toan tu 2: toan tu 3
// toan tu 1: tra ve true > < false(dieu kien)
// -true: tra ve toan tu 2
//   - false: tra ve toan tu 3

// if (a >= 10) { d = a }
// else { d = (-1) * a }

// let a = -10;
// let d = (a >= 0 ? a : (-1) * a)
// console.log(d);

// Tìm 1 chuỗi
// indexOf(), lastIndexOf()
// search();

// giống:
// trả về số nguyên, vị trí của từ cần tìm trong chuỗi gốc
//   - 1, 0 <=
//   -1 không tìm thấy
// 0 <= tìm thấy

// a = "123454321@";
// b = "@";
// // console.log(a.includes(b));
// if (a.includes(b)) {
//   console.log("b nằm trong a");
// } else {
//   console.log("b không nằm trong a");
// }

// split
// let str = "Hung 20 HN";
// console.log(str);
// let split = str.split(' ');
// console.log(split);
// let name = split[0];
// let age = split[1];
// let country = split[2];
// console.log(name);
// console.log(age);
// console.log(country);

// let arr = ["Hung", "Quang", "Duy"];
// let listPhone = [
//   {
//     name: "dt1",
//     price: 10e6,
//   },
//   {
//     name: "dt2",
//     price: 20e6,
//   },
//   {
//     name: "dt3",
//     price: 30e6,
//   }
// ]
// for (const phone of listPhone) { // for of sử dụng ở mảng
//   // console.log(value);
//   for (const key in phone) { // for in sử dụng ở object
//     const value = phone[key];
//     console.log(key + ": " + value);
//   }
// }

// Mảng - Object

// thêm 1 dữ liệu mới
// Mảng: push(), unshift();
// thêm mới - chèn: [1, 2, 3] => [1, 2, 4, 3];
// splice() // vừa xóa vừa chèn
// let arr0 = [1, 2, 3];
// // arr.splice(2, 0, 4, 5, 6);
// // console.log(arr);
// let arr1 = [4, 5, 6];
// let arr2 = arr0.concat(arr1);
// console.log(arr2);
// Object: object.keymoi = valuemoi

// sửa
// Mảng: arr[index] = valuemoi // số
// object: object[keycu] = valuemoi // key: chuỗi

// xóa
// Mảng: arr.splice(start, count);
// object.delete object[keycu];
// delete arr[index];
// let arr = [1, 2, 3];
// // delete arr[2]; // cấm
// arr.splice(2, 1);
// console.log(arr);

// duyệt
// Mảng: for hoặc for-of
//         Object: for-in


let listPhone = [
  {
    name: "samsung j6",
    price: 11e6,
    brand: "samsung"
  },

  {
    name: "samsung j8",
    price: 15e6,
    brand: "samsung"
  },
  {
    name: "samsung j9",
    price: 19e6,
    brand: "samsung"
  }
];

for (let i = 0; i < listPhone.length; i++) {
  const phone = listPhone[i];
  console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
    console.log(key + " : " + value);
  }
  console.log("\t \t");
}
// thêm thông tin điện thoại
let newPhoneName = prompt("tên điện thoại mới:");
let newPhonePrice = Number(prompt("gía điện thoại mới:"))
let newPhoneBrand = prompt("hãng điện thoại mới")
let newPhone = {
  name: newPhoneName,
  price: newPhonePrice,
  brand: newPhoneBrand
};
listPhone.push(newPhone)
console.log("thêm thành công");

for (let i = 0; i < listPhone.length; i++) {
  const phone = listPhone[i];
  console.log(i + 1);
  for (const key in phone) {
    const value = phone[key];
    console.log(key + " : " + value);
  }
  console.log("\t \t");
}
// sửa 
let sttSua = parseInt(prompt("Nhập vị trí muốn sửa:"));
if (sttSua >= 1 && sttSua <= listPhone.length) {
  // Nhập đúng
  let phoneEdit = listPhone[sttSua - 1];
  let keyEdit = prompt("Nhập thông tin cần sửa: (name, price, brand)");
  if (phoneEdit.hasOwnProperty(keyEdit)) {
    // Nhập đúng
    phoneEdit[keyEdit] = prompt(`Nhập ${keyEdit} mới:`);
    console.log("======= Sửa thành công ======");

    // in ra
    for (let i = 0; i < listPhone.length; i++) {
      const phone = listPhone[i];
      console.log(i + 1);
      for (const key in phone) {
        const value = phone[key];
        console.log("\t" + key + ": " + value);
      }
      console.log('\t --- \t --- ');
    }
  } else {
    // Nhập sai
    alert("Sai key cần sửa");
  }
} else {
  // Nhập sai
  alert("Nhập sai stt");
   }
  // xóa
  let sttXoa = parseInt(prompt("Vị trí cần xóa:"));
  if (sttXoa >= 1 && sttXoa <= listPhone.length) {
    // Nhập đúng:
    listPhone.splice(sttXoa - 1, 1);
    console.log("======= Xóa thành công ======");

    // in ra
    for (let i = 0; i < listPhone.length; i++) {
      const phone = listPhone[i];
      console.log(i + 1);
      for (const key in phone) {
        const value = phone[key];
        console.log("\t" + key + ": " + value);
      }
      console.log('\t --- \t --- ');
    }
  } else {
    alert("Nhập sai");
  }

  // Tìm theo tên đt
  let searchPhoneName = prompt("Tên đt cần tìm");
  let minPrice = Number(prompt("Nhập price min:"));
  let maxPrice = Number(prompt("Nhập price max:"));
  console.log("======= Tìm đt ======");
  let resultSearch = [];

  for (const phone of listPhone) { // Vòng lặp tìm kiếm
    // if (phone.name.toLowerCase().includes(searchPhoneName.toLowerCase())) {
    //   resultSearch.push(phone);
    // }
    if (phone.price >= minPrice && phone.price <= maxPrice) {
      resultSearch.push(phone);
    }
  }

  // console.log(`=== Kết quả tìm kiếm: ${searchPhoneName}`);
  console.log(`=== Kết quả tìm kiếm: ${minPrice} - ${maxPrice}`);
  if (resultSearch.length > 0) {
    // in ra
    for (let i = 0; i < resultSearch.length; i++) {
      const phone = resultSearch[i];
      console.log(i + 1);
      for (const key in phone) {
        const value = phone[key];
        console.log("\t" + key + ": " + value);
      }
      console.log('\t --- \t --- ');
    }
  }
  else {
    console.log("Không có kết quả thỏa mãn");
  }

  // Sắp xếp
  for (let i = 0; i < listPhone.length - 1; i++) {
    for (let j = i + 1; j < listPhone.length; j++) {
      if (listPhone[i].brand.toLowerCase().localeCompare(listPhone[j].brand.toLowerCase()) > 0) {
        let temp = listPhone[i];
        listPhone[i] = listPhone[j];
        listPhone[j] = temp;
      }
    }
  }
  console.log("====== Sắp xếp ======");

  for (let i = 0; i < listPhone.length; i++) {
    const phone = listPhone[i];
    console.log(i + 1);
    for (const key in phone) {
      const value = phone[key];
      console.log("\t" + key + ": " + value);
    }
    console.log('\t --- \t --- ');
  }