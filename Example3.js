var fs1=require("fs")

fs1.mkdir("./myFolder",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("Folder successfully created")
    }
})