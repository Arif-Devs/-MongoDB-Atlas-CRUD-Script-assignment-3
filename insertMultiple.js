const {client} = require("./mongoConfig")

const  insertMultipleDoc = async ()=>{

    try{
        const database = client.db("workshop");
        const members = database.collection("members");

        const docs = 
            [

                {
                    name: "hm younus",
                    profession: "MERN developer"
                },
                {
                    name: "ripon",
                    profession: "graphic designer"
                },
                {
                    name: "habiba ahsan",
                    profession: "wordpress designer"

                },
                {
                    name : "ni thamid",
                    profession: "shopify expert"
                },
                {
                    name : "khokon hossain",
                    profession: "ecommercr expert"
                }

            ]

            const result = await members.insertMany(docs)
            console.log(`insert document perfectly: ${result.insertedId}`)
    
    
        } catch(error){
        console.log("error")
    
    }finally{
        await client.close
    }

}

insertMultipleDoc()