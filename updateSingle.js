const {client} = require ("./mongoConfig.js")

const updateSingleData = async ()=>{

    try{
        const database = client.db("workshop");
        const members = database.collection("members")

        const filter = { name: "arifur rahman" };
        const options = { upsert: true };

        const updateDoc = {
            $set: {
              country: "bangladesh"
            }
          };
          const result = await members.updateOne(filter, updateDoc, options);
          console.log('data updated')

     } catch (error){
        console.log('error')
    } finally{
        await client.close();
    }
}

updateSingleData()