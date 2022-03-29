const { table } = require("console");
const fs = require("fs"); // fs module required

let inputArr = process.argv.slice(2); // Take input of files a user wants to view
// console.log(inputArr);
// let fileArr = [...inputArr]; // Take inputArr in a file Array using spread operator

let fileArr = [];
let optionArr = [];

for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i].includes("-")){
        optionArr.push(inputArr[i]);
    }else{
        fileArr.push(inputArr[i]);
    }
}
// console.log("option arr -- > ", optionArr);
// console.log("fileArr ---> ", fileArr);
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

// Read the file(s) content and Display to the user

let content = "";
for(let i = 0; i < fileArr.length;i++){
    content += fs.readFileSync(fileArr[i]) +"\n"; 
}
console.log(content);

// if -s is present then remove the extra \n lines

//check if -s exists in optionArr
let finalContent = "";
let isSPresent = optionArr.includes("-s");
// console.log(isSPresent);
let contentArr = content.split("\n");
if(isSPresent){

   
    // console.table(contentArr);

    for(let i = 1; i <= contentArr.length;){
        if(contentArr[i] == "" && contentArr[i-1] == ""){
            contentArr.splice(i,1);
        }else{
            i++;
        }
    }
}
console.table(contentArr);

let indexOfN = optionArr.indexOf("-n");
let indexOfB = optionArr.indexOf("-b");




for(let i = 0; i < contentArr.length; i++){
   
        finalContent+=contentArr[i] + "\n";
}
console.log(finalContent);
// console.table(contentArr);
// console.log(contentArr);

