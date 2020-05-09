let images = {
    "name": "images",
    "isFolder": true,
    "content": [
        {
            "name": "background.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "forceground.jpg",
            "isFolder": false,
            "content": []
        },
        {
            "name": "my travel",
            "isFolder": true,
            "content": [
                {
                    "name": "ha noi",
                    "isFolder": true,
                    "content": [
                        {
                            "name": "pho-co.jpg",
                            "isFolder": false,
                            "content": []
                        },
                        {
                            "name": "ho-guom.jpg",
                            "isFolder": false,
                            "content": []
                        }
                    ]
                },
                {
                    "name": "check-in.jpg",
                    "isFolder": false,
                    "content": []
                }
            ]
        }
    ]
}

// function find_files(object, keyword){
//     let result=[];
//     if (object.isFolder == false){
//             if (object.name.search(keyword)>=0){
//                 result.push(object.name);
//             }
//     }
//     else{
//         for (const childObject of object.content){
//             let r =find_files(childObject, keyword);
//             result = result.content(r);
//         }
//     }
//     return result;

// }
// let result = find_files(images,"b");
// Console.tabe(result)

function find_files(object, keyword) {
}
find_files(images, "b");

let allFileAndFolders = [];
allFileAndFolders.push(images);

while (allFileAndFolders.length > 0) {
    let object = allFileAndFolders.shift();
    if (object.isFolder) {
        if (object.name.search(keyword) >= 0) {
            Console.log(object.name);
        }
        else {
            allFileAndFolders = allFileAndFolders.push(...object.content)
        }
    }
}

