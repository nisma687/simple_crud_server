/**--------------
 * mongodb connection
 * --------------
 * create account in mongodb
 * create cluster in mongodb
 * create database
 * whitelist ip address sobaike access deya
 * database>connect>driver>view full code
 * change the password in the uri
 * -------------------
 * create --post
 * app.post('/users',async(req,res)=>{})
 * function async to use await inside it post ay
 * goto node mongodb crud and usage document insert a document.
 * make sure you use the express.json() middleware
 * access data from the body :const user=req.body;
 * const result=await userCollection.insertOne(user);
 * res.send(result);
 * 
 * 
 * 
 * 
 * client side
 * ----------------
 * create fetch
 * add second parameter as an object
 * provide method and headers
 * method : "POST"
 * headers: {"content-type":"application/json"},
 * body: JSON.stringify(user)
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * ------------
 * read --many
 * ------------
 * app.get('/users',async(req,res)=>{})
 * const cursor=userCollection.find();
 * const results=await cursor.toArray();
 * res.send(results);
 * 
 * 
 * ----------
 * 
 * delete --one
 * -------------
 * create delete button
 * create app.delete('/users/:id',async(req,res)=>{})
 * const id = req.params.id;
 * console.log('please delete from database', id);
 * const query={_id: new ObjectId (id)};
 * const result=await userCollection.deleteOne(query);
 * res.send(result);
 * ---------------
 * 
 * Client
 * ---------------
 * create delete button
 * add event listener
 * create fetch url with id parameter dynamically
 * fetch(`http://localhost:5000/users/'${id}`,{
 * method: "DELETE"})
 * 
 * 
 * 
 * 
 * 

 * 















 */