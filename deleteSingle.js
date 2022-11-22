const {client} = require ("./mongoConfig.js")

const deleteSingleDoc = async ()=>{

    try{
        const database = client.db("workshop");
        const members = database.collection("members")
    
        const query = { name: "khokon hossain" };
        const result = await members.deleteOne(query);

        if (result.deletedCount === 1) {
            console.log("Successfully deleted one document.");
          } else {
            console.log("No documents matched the query.");
          }
         } catch(error){
             console.log(error)
         }finally {
            await client.close();
        }

    }
deleteSingleDoc()