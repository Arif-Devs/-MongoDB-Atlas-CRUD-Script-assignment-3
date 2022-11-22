const {client} = require("./mongoConfig")

const insertSingleData = async()=>{
    try{
        const database = client.db("workshop")
        const members = database.collection("members")
       
        //insert members information
        const doc = {
        name : "Arifur rahman",
        profession : "MERN developer"
        
        }
        const result = await members.insertOne(doc)
        //console.log(result)
        console.log(`insert document perfectly: ${result.insertedId}`)


    } catch(error){
        console.log(error)
    } finally{
        await client.close();
    }
}
insertSingleData();
