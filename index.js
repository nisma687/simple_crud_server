const express = require('express');
const app = express();
const cors = require('cors');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port=process.env.PORT || 5000;


// Middleware
app.use(cors());
app.use(express.json());
// create username:nismabd
// pass:nisma1234





const uri = "mongodb+srv://nismabd:nisma1234@cluster0.231nuf3.mongodb.net/?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    const userCollection = database.collection("users");

    app.get('/users',async(req,res)=>{
      const cursor=userCollection.find();
      const results=await cursor.toArray();
      res.send(results);

    })
    // specific user data get api
    app.get('/users/:id',async(req,res)=>{
      const id=req.params.id;
      console.log(id);
      if (id.length !== 24 || !/^[0-9a-fA-F]{24}$/.test(id)) {
        // If not, send an error response
        return res.status(400).send('Invalid id format');
    }
      const query={_id: new ObjectId (id)};
      const user= await userCollection.findOne(query);
      res.send(user);
    })

    app.put('/users/:id',async(req,res)=>{
      const id=req.params.id;
      const user=req.body;
      console.log(id,user);
      const filter={_id: new ObjectId(id)}
      const options={upsert:true}
      const updatedUser={
        $set:{
          name:user.name,
          email:user.email

        }
      }
      const result=await userCollection.updateOne(filter,updatedUser,options);
      res.send(result);
    })

    app.post('/users',async(req,res)=>{
      const user=req.body;
      console.log('new user',user);
      const result=await userCollection.insertOne(user);
      res.send(result);

    });
    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id;
      console.log('please delete from database', id);
      const query={_id: new ObjectId (id)};
      const result=await userCollection.deleteOne(query);
      res.send(result);
    })
   




    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  } 
}
run().catch(console.dir);






// Routes
app.get("/",(req,res)=>{
    res.send("Welcome to the server");
})

app.listen(port,(req,res)=>{
    console.log(`server is running on the port : ${port}`)
})