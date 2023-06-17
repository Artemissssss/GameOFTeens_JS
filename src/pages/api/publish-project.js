const { MongoClient, ObjectId } = require('mongodb');

export default async function handler(req, res) {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.NEXT_PUBLIC_DATABASE_USER}:${process.env.NEXT_PUBLIC_DATABASE_PASSWORD}@${process.env.NEXT_PUBLIC_DATABASE}/?retryWrites=true&w=majority`,
        { useNewUrlParser: true, useUnifiedTopology: true }
    );  
    const coll = client.db('goiteens').collection('startups');
    if(req.method === "POST"){
        const result = await coll.insertOne(req.body)
        res.status(200).json(result)
    }else if(req.method === "DELETE"){
        const result = await coll.deleteOne({_id: new ObjectId(req.body)});
        const cursor = coll.find();
        const result2 = await cursor.toArray();
        await client.close();
        res.status(200).json(result2)
    }else{
    const cursor = coll.find();
    const result = await cursor.toArray();
    await client.close();
    res.status(200).json(result)
    }
}