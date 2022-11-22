const {client} = require ("./mongoConfig.js")

const findMultipleDoc = async ()=>{
    try{
        const database = client.db("workshop");
        const members = database.collection("members");

        const query = { profession: "MERN developer" };
        const cursor = members.find(query);
    
        if ((await cursor.estimatedDocumentCount) === 0) {
            console.log("No documents found!");
          } else{
            const members = await cursor.toArray()

            await members.forEach(user => console.log(members));
          }
          
          
       
        } catch(error){
        console.log(error);
        
        }finally{
            await client.close()
        }

}

findMultipleDoc()
