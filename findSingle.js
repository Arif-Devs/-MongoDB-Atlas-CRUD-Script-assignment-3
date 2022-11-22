const {client} = require ("./mongoConfig.js")


const findSingleData = async ()=> {
    try {
      const database = client.db("workshop");
      const members = database.collection("members");
      
      
      // Query for a movie that has the title 'The Room'
      const query = { name: "hm younus" };
      
      const result = await members.findOne(query);
      // since this method returns the matched document, not a cursor, print it directly
      console.log(result);


    } catch(error){
        console.log(error)
    } 
    
    finally {
      await client.close();
    }
  }
  findSingleData()