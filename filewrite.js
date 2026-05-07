
const fs=require("fs");
fs.writeFile("two.txt","hii i am new to node",(err)=>{
    if(err){
        console.log("error occured check your code properly",err);
    }
    else{
        console.log("file content");
    }
});
fs.appendFile("two.txt","swapnika ",(err)=>{
    if(err){
        console.log("error occured check your code properly",err);
    }
    else{
        console.log("file content");
    }
});
fs.readFile("two.txt",(err,data)=>{
    if(err){
        console.log("error occured",err);
    }
    else{
        console.log("retrived data:",data.toString());
    }
});

