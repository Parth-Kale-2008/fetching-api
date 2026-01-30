import axios from "axios";
const fetchData = async()=>{
    try{
        let res = await axios.get("https://catfact.ninja/fact");
        setData(resData)
    }catch{
        console.error("something went wrong");
        
    }
}