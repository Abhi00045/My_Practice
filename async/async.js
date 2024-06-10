async function swag(){
    try{
        let data = await fetch("https://github.com/Abhi00045/My_Practice.git");
    let resource = data.json;
    console.log(resource);
    }
    catch{
        console.log("error");
    }
}