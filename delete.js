const fs=require("fs");
fs.unlink("one.txt",(err)=>{
    if(err)
    {
        console.log("error occured",err);
    }
    else{
        console.log("file deleted successfully");
    }
});