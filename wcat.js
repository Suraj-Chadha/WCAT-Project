const fs = require("fs"); // fs module required

let inputArr = process.argv.slice(2); // Take input of files a user wants to view
console.log(inputArr);
let fileArr = [...inputArr]; // Take inputArr in a file Array using spread operator

// check if file exists:

for(let i = 0; i < fileArr.length; i++){
    let fileExist = fs.existsSync(fileArr[i]);
    // try{
        if(!fileExist){
            console.log("One or more file(s) doesn't exist");
            process.exit();
        }
            // throw FileDoesNotExist(fileArr[i]);
    }
// }
// catch(err){
//     // console.error(err.value, err.message);
//     throw Error(err());
// }
// }

// function FileDoesNotExist(fileName){
//     this.value = fileName;
//     this.message = " doesn't exist";
//     console.log(this.value+ this.message);
// }

// Read the file(s) content and Display to the user

let content = "";
for(let i = 0; i < fileArr.length;i++){
    content += fs.readFileSync(fileArr[i]) + "\n"; 
}
console.log(content);

