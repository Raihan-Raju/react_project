const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();

app.use(express.json());
app.use(cors());
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://raju:789789@cluster0.omgilvs.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
    const dontationCollection = client.db("sadka").collection("dontationCollection");


    app.get("/", (req, res) => {
      res.send("test");
    });
    app.get("/donate",async(req,res)=>{
        const result=await dontationCollection.find().toArray()
        res.send(result)
    })

    app.post("/donate",async(req,res)=>{
        const data=req.body;
        const result=await dontationCollection.insertOne(data);
        res.send(result)
    })
app.delete("/donate/:id",async(req,res)=>{
    const id=req.params.id
    const query={_id:new ObjectId(id)}
    const result=await dontationCollection.deleteOne(query);
    res.send(result)
})

  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => console.log("server is running"));