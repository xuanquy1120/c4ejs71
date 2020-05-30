let idTitle = document.getElementById("title");
idTitle.innerHTML = "DANH SÁCH CÁC ĐIỆN THOẠI";
let listphone = [
    {
        name: 'Điện thoại Samsung Galaxy A51',
        brand: 8.19e6,
        price: 'Samsung',
        img: 'https://cdn.tgdd.vn/Products/Images/42/220903/samsung-galaxy-a51-8gb-blue-400x460-1-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-a51-8gb'
    },
    {
        name: 'Điện thoại Huawei P40 Pro',
        brand: 23.99e6,
        price: 'Huawei',
        img: 'https://cdn.tgdd.vn/Products/Images/42/215773/huawei-p40-pro-400x460-3-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/huawei-p40-pro'
    },
    {
        name: 'Điện thoại iPhone 11 Pro',
        brand: 34.19e6,
        price: 'Apple',
        img: 'https://cdn.tgdd.vn/Products/Images/42/210655/iphone-11-pro-256gb-black-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/iphone-11-pro-256gb'
    },
    {
        name: 'Điện thoại iPhone 7 Plus',
        brand: 9.49e6,
        price: 'Apple',
        img: 'https://cdn.tgdd.vn/Products/Images/42/78124/iphone-7-plus-gold-400x460-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/iphone-7-plus'
    },
    {
        name: 'Điện thoại Huawei Nova 5T',
        brand: 8.29e6,
        price: 'Huawei',
        img: 'https://cdn.tgdd.vn/Products/Images/42/209795/huawei-nova-5t-400x460-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/huawei-nova-5t'
    },
    {
        name: 'Điện thoại Samsung Galaxy Z Flip',
        brand: 36e6,
        price: 'Samsung',
        img: 'https://cdn.tgdd.vn/Products/Images/42/213022/samsung-galaxy-z-flip-chitiet-2-788x544.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-z-flip'
    },
    {
        name: 'Điện thoại Samsung Galaxy A31',
        brand: 6.49e6,
        price: 'Samsung',
        img: 'https://cdn.tgdd.vn/Products/Images/42/216174/samsung-galaxy-a31-400x460-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-a31'
    },
    {
        name: 'Điện thoại iPhone 8 Plus',
        brand: 14.99e6,
        price: 'Apple',
        img: 'https://cdn.tgdd.vn/Products/Images/42/114110/iphone-8-plus-1-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/iphone-8-plus'
    },
    {
        name: 'Điện thoại Huawei P40 ',
        brand: 17.99e6,
        price: 'Huawei',
        img: 'https://cdn.tgdd.vn/Products/Images/42/211157/huawei-p40-400x460-1-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/huawei-p40'
    },
    {
        name: 'Điện thoại Samsung Galaxy Note 10+',
        brand: 23.99e6,
        price: 'Samsung',
        img: 'https://cdn.tgdd.vn/Products/Images/42/206176/samsung-galaxy-note-10-plus-blue-400x460.png',
        linkDetail: 'https://www.thegioididong.com/dtdd/samsung-galaxy-note-10-plus'
    },
];
let tbody = document.getElementById('iphone')



// for (let i = 0; i <= listphone.length; i++) {
//     const phone = listphone[i];
//     let html = `<tr>
//                 <td>${phone.name}</td>
//                 <td>${phone.brand}</td>
//                 <td>${phone.price}</td>
//                 <td><img src="${phone.img}" width="100"></td>
//                 <td><a href=${phone.linkDetail}>link</a></td>
//                </tr>`
//     tbody.innerHTML += html
// };

let txt=(prompt("Nhập tên hãng cần tìm điện thoại"));
txt = txt.toLowerCase();
for (let i = 0; i <= listphone.length; i++){
    if( listphone[i].price.toLowerCase() === txt ){
    const phone = listphone[i];
    let html = `<tr>
                <td>${phone.name}</td>
                <td>${phone.brand}</td>
                <td>${phone.price}</td>
                <td><img src="${phone.img}" width="100"></td>
                <td><a href=${phone.linkDetail}>link</a></td>
               </tr>`
    tbody.innerHTML += html
    }
};

// let min = (prompt("Nhập giá điện thoại thấp nhất bạn muốn tìm"));
// let max = (prompt("Nhập giá điện thoại cao nhất bạn muốn tìm"));
// for (let i = 0; i <= listphone.length; i++) {
//     if (listphone[i].brand >= min && listphone[i].brand <= max) {
//         const phone = listphone[i];
//         let html = `<tr>
//                 <td>${phone.name}</td>
//                 <td>${phone.brand}</td>
//                 <td>${phone.price}</td>
//                 <td><img src="${phone.img}" width="100"></td>
//                 <td><a href=${phone.linkDetail}>link</a></td>
//                </tr>`
//         tbody.innerHTML += html
//     };
// };




