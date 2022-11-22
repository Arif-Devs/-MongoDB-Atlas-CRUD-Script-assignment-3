const {client} = require ("./mongoConfig")

 const replaceData = async ()=> {
    try {
        const database = client.db("workshop");
        const members = database.collection("members");
      
     
        const query = 
            { name:  "ripon"  }
        // create a new document that will be used to replace the existing document
        const replacement = {
            name:"amanulla ripon" };
        const result = await members.replaceOne(query, replacement);
        console.log(`Modified ${result.modifiedCount} document(s)`);
       
        } catch(error){
            console.log('error');
        } finally {
        await client.close();
        }
    }
  replaceData();