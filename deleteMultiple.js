const {client} = require ("./mongoConfig.js")

const deleteMultipleDoc = async ()=>{

    try{
        const database = client.db("workshop");
        const members = database.collection("members")
    
        const query = { country: "bangladesh" };
        const result = await members.deleteMany(query);
        console.log("Deleted " + result.deletedCount + " documents");
    
     } catch(error){
        console.log(error)

     } finally{
        await client.close()
     }
    }
deleteMultipleDoc()