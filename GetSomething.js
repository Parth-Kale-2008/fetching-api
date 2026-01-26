const url = "https://www.boredapi.com/api/activity";
async function GetSomething(){
    console.log("hello");
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(error){
        console.error("some error occoured");
    }
}

GetSomething()