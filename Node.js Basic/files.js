const fs= require('fs');

// reading Files

    // fs.readFile('./docs/blog12.txt',(err,data)=>{
        
    fs.readFile('./docs/blog1.txt',(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data.toString());
    });

    console.log("Read first");

// writing files 

    fs.writeFile('./docs/blog1.txt','Writing file',()=>{
        console.log("file had written");
    });
    fs.writeFile('./docs/blog2.txt','Writing 2nd blog file', ()=>{
        console.log("2nd blog file had written");
    });

// directories

    if(!fs.existsSync('./assets')){
        fs.mkdir('./assets',(err)=>{
        if(err){
            console.log(err);
        }
            console.log('Folder Has Created');
        });
    }else{
        fs.rmdir('./assets',(err)=>{
            if(err){
                console.log(err);
            }
            console.log('Folder Deleted');
        });
    }

// deleting files

    if(fs.existsSync('./docs/delete.txt')){
        fs.unlink('./docs/delete.txt',(err)=>{
            if(err){
                console.log(err);
            }
            console.log('File has been deleted');
        });
    }
